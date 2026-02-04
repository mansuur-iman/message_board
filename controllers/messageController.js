const db = require('../db/queries');
const{body, validationResult} = require('express-validator');

const alphaErr = 'Must contain only letters';
const lengthErr = 'Must be between 1 and 10 characters long';

const validateUser = [
body('user').trim().isAlpha().withMessage(`user ${alphaErr}`).isLength({min:1, max: 10}).withMessage(`username ${lengthErr}`),
body('text').trim().isLength({min:1}).withMessage('Text required'),
];

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

const addMessage = [
    validateUser,
    async (req,res)=>{

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        };

        try{
           const {user,text} = req.body;
           await db.insertMessage(user,text);
           res.redirect('/');
        }
        catch(err){
            console.error(err);
            res.status(400).send('BOth user and text are require.')
        };
    },
    
];

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

