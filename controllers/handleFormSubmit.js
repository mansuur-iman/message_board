const messages = require('../data/messages');

function handleFormSubmit(req,res){
    const {user,text} = req.body;
    if(!user || !text){
        return res.status(404).send('both user and text are required. please fill in!')
    };

    const newMessage = {
        id: messages.length ? messages[messages.length -1].id + 1 : 1,
        user,
        text,
        added: new Date(),
    };

    messages.push(newMessage);

    res.redirect('/');

};

module.exports = handleFormSubmit;