
const authorQueries ={
    //FUNCIONA
    getAuthorByEmail:`
    SELECT a.name,a.surname,a.image, a.id_author, a.email
    FROM authors as a
    WHERE a.email=$1 `,
    //FUNCIONA
    getAllAuthors: `SELECT * FROM authors`,
    //FUNCIONA
    createAuthor:`INSERT INTO authors(id_author,name,surname,email,image)
    VALUES ($1,$2,$3,$4,$5)`,
    //FUNCIONA
    deleteAuthor:`DELETE 
    FROM authors 
    WHERE id_author =$1`,
    //FUNCIONA
    updateAuthor: `UPDATE authors
    SET name = $1, image = $2
    WHERE email = $3`,
}

module.exports = authorQueries
