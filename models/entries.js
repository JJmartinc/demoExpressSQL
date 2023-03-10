const { Pool } = require('pg');
const queries = require('./queries')
const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
})

// GET
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEntriesByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE POST
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry, [title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE 
const deleteEntry = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry,[title])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};
//UPDATE PUT
const updateEntry =  async (entry) => {
    const {title} = entry;
    let client, result;
    try {
        client = await pool.connect(); // Wait to open connection
        const data = await client.query(queries.deleteEntry, [title]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Error deleting entry" });
    } finally {
        client.release();
    }
    return result
}




const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    deleteEntry,
    updateEntry
}

module.exports = entries;


// Pruebas
/*
    getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data))
*/

/*
getAllEntries()
.then(data=>console.log(data))
*/

/*
let newEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel ten??a un saco vacio y lo llen??",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data))
    */

