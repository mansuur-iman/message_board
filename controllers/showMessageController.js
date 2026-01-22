const messages = require('../data/messages');

function showMessageController(req,res){
    const id = Number(req.params.id);
    const message = messages.find((message)=>message.id === id);

    if(!message){
        res.status(404).send('No message Found');
    };

    res.render('message', {message});
};

module.exports = showMessageController;