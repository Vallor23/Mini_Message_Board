const {createMessage, getMessage} = require('../db/messageQueries');

async function handleCreateMessage(req, res) {
    try {
        const {username, text, added} = req.body;
        console.log("Added:",added)
        if(!added){
            added = Date.now()
        }

        const newMessage = await createMessage({username, text, added});
        res.redirect('/')
    } catch (error) {
        console.error("Error creating messages:", error);
        res.status(500).json({error: 'Internal server error'});
    }
};

async function handleGetMessage(req, res) {
    try {
        const messages = await getMessage();
        res.render('index', {title: "Mini Messageboard", messages: messages})
    } catch (error) {
       console.error("Error getting messages:", error);
       res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = {
    handleCreateMessage,
    handleGetMessage
};