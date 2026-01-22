const messages = require('../data/messages');

function messageController(req,res){
    res.render('index', { title :  'minimessage Board', messages});
}

module.exports = messageController;