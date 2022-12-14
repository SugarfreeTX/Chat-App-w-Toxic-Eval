import React, {useState, useEffect } from 'react';
// import React from 'react';
import io from 'socket.io-client'
import { useSearchParams } from 'react-router-dom';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';



import './Chat.css';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';
    const [searchParams] = useSearchParams();

    useEffect(() => {

        const name = searchParams.get('name');
        const room = searchParams.get('room');
        
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
 
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, searchParams]);

    useEffect(() => {
        socket.on('message', (message, self) => {
            if (self) return;
            setMessages([...messages, message]);


        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });
    }, [messages]);

    // function for sending messages 
    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }

    }

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />   
            </div>
            <TextContainer users={users}/>
        </div>
    
    );
}

export default Chat;