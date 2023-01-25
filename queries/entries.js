const entryQueries ={

    getEntriesByEmail:
    //FUNCIONA
    `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1 
    ORDER BY e.title;`,
    //FUNCIONA
    getAllEntries: ` SELECT e.title,e.content,e.date,e.category,a.name||' '||a.surname AS author_name
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    ORDER BY e.title;`,
    //FUNCIONA
    createEntry:`INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
    //FUNCIONA
    deleteEntry:`DELETE 
    FROM entries 
    WHERE id_entry =$1`,
    // FUNCIONA
    updateEntry: `UPDATE entries
    SET content = $1, category = $2
    WHERE title = $3`
}

module.exports = entryQueries