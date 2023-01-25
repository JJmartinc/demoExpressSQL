const entry = require('../models/entries'); // Importar el modelo de la BBDD

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

//DELETE
const deleteEntry = async (req, res) => {
    const deletEntry = req.body.title;
    const response = await entry.deleteEntry(deletEntry);
    res.status(200).json({
        "message": `Se ha borrado la ${req.body.title} de noticias`,
        'item_deleted':response,
        data: deletEntry
    });
}

//UPDATE
const updateEntry = async (req, res) => {
    const title = req.query.title
    const updatedEntry = req.body; // {content,category}
    const response = await entry.updateEntry(updatedEntry,title);
    res.status(201).json({
        "items_updated": response,
        data: updatedEntry
    });
}

module.exports = {
    getEntries,
    createEntry,
    deleteEntry,
    updateEntry
}