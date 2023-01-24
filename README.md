# demoExpressSQL
EJERCICIO - API REST con Express - Posts del blog
Modificar la BBDD del ejemplo de clase para que no se puedan insertar entries repetidas por título (Hay que alterar algo en la tabla)

Completar la API del back de clase con las siguientes rutas:

[GET] http://localhost:3000/api/entries
Modificar la query SQL para que me devuelva una respuesta con los datos del autor y sin ID de la entry:

{
"title": "noticia desde Node",
"content": "va a triunfar esto2",
"date": "2022-03-20T23:00:00.000Z",
"category": "sucesos",
"name": "Alejandru",
"surname": "Regex",
"image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
},
En vez de esta respuesta, que es la que está ahora:

 {
"id_entry": 2,
"title": "Noticia: Un panda suelto por la ciudad",
"content": "El panda se comió todas las frutas de una tienda",
"date": "2022-03-15T23:00:00.000Z",
"email_author":"alvaru@thebridgeschool.es"
"category": "Sucesos"
},
[PUT] http://localhost:3000/api/entries/ (parecido a POST) modifica una entry por completo con nuevos datos y retorna un status 200. Buscar por título para editar entry.
[DELETE] http://localhost:3000/api/entries/ Borra una entry y retorna un status 200. Búsqueda por título de entry para borrar. Payload {message: "Se ha borrado la entry 'Título de noticia' "}
Habilitar rutas para autores en el servidor del ejemplo de clase:
[GET] http://localhost:3000/api/authors Retorna un objeto con los datos de todos los autores. Retorna un status 200
[GET] http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es Retorna un objeto con los datos del autor buscado. Retorna un status 200
[POST] http://localhost:3000/api/authors/ Se envía por POST los datos del autor a crear y retorna un status 201. Payload {message: "usuario creado: guillermu@thebridgeschool.es"}
[PUT] http://localhost:3000/api/authors/ Actualiza los datos de un autor y retorna un status 200. Payload {message: "usuario actualizado: guillermu@thebridgeschool.es"}
[DELETE] http://localhost:3000/api/authors/ Borra un autor y retorna un status 200. Búsqueda por email. Payload {message: "Se ha borrado guillermu@thebridgeschool.es"}
img
