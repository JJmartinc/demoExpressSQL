const author = require('../models/author'); // Importar el modelo de la BBDD
const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await author.getAuthorsByEmail(req.query.email);
    }
    else {
        authors = await author.getAllAuthors();
    }
    res.status(200).json(authors); //
}
// Crear eauthor por email
const createAuthor = async (req, res) => {
    const newAuthor= req.body; // {title,content,email,category}
    const response = await author.createAuthor(newAuthor);
    res.status(201).json({
        'message': `Se ha creado un nuevo autor ${newAuthor.email} de noticias`,
        "items_created": response,
        data: newAuthor
    });
}
const deleteAuthor = async(req,res)=>{
    const deletAuthor = req.body;// {title}
    const response = await author.deleteAuthor(deletAuthor);
    res.status(200).json({
        'message': `Se ha borrado la entry ${deletAuthor.email} de noticias`,
        'item_deleted':response,
        data: deletAuthor
    });
}
const updateAuthor = async(req,res)=>{
    const updatAuthor =req.body;
    const {email}= req.params.email
    const response = await author.updateAuthor(updatAuthor,email);
    res.status(200).json({
        'message': `Se ha actualizado el autor ${newAuthor.email} de noticias`,
        'item_updated':response,
        data:updatAuthor
    })
}
module.exports = {
    getAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor
}