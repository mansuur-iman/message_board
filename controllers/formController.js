function showForm(req,res){
    res.render('form', {title : "Fill in the form"});
};

module.exports = showForm;