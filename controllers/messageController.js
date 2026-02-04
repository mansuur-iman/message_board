const db = require('../db/queries');

async function showMessage(req,res){
   try{ 
    const messages = await db.showAllMessages();

    res.render('index', {title: 'minimessageBoard', messages});
   }
   
   catch(err){
    console.error('actual error:', err)
    res.status(500).send(`server error, try again later.`)
   };
};

async function showMessageById(req,res){
    try{
    const {id} = req.params;
    const message = await db.getMessageById(id);

    res.render('message', {message});
    }
    
    catch(err){
        res.status(404).send('something went wrong in fetching the message')
    };
};

async function addMessage(req,res){
    try{
    const{user,text} = req.body;
    await db.insertMessage(user,text);
    res.redirect('/');
    }
    catch(err){
        res.status(400).send('Both user and text are require, please fill it up.');
    }
};

const showForm = (req,res)=>{
    res.render('form', {
        title: 'user form'
    });
};

async function deleteMessageById(req,res){
    try{
    const {id} = req.params;
    await db.deleteMessage(id);
    res.redirect('/');
    }
    catch(err){
        res.status(500).send('something went wrong in deleteing the message, try again later.');

    };
};

module.exports = {
    showMessage,
    showForm,
    showMessageById,
    addMessage,
    deleteMessageById
}

