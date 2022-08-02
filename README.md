# React-Chat-App

A chat application similar to Twitch.tv where messages will be sent to TensorFlow Fairness/Toxic Evaluation model. (Here is the model: https://github.com/tensorflow/tfjs-models/tree/master/toxicity)

Only messages that have been associated with the text '!ban' and '!timeout' will be sent to the model for evaulation. Reason for creating this application is to evaluate what a user says without emotional bias that a human moderator is prone to have when making a decision to time-out a user or ban. Emotional bias can occur when a moderator is infacuated with the streamer which can lead the moderator using emotions to ban instead of determining if the messages from a user did violate chat room rules. 

For example:
User_A: Wow, Streamer you're looking sexy today! 

*Moderator executes a !timeout on User_A for the comment which is a compliment. Not something harmful or toxic. 

I'm using Socket.io with React to build the chatroom. It will have emotes and !commands similar to what Twitch calls NightBot. 
