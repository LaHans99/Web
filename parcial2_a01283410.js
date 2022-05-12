var mysql = require('mysql');
// Consulta SQL.
var sql = 'SELECT * FROM category LIMIT 10';

var query1  = "INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES('Hannia','a01283410','a01283410@gmail.com','itc'), ('AMIT','a01234','AMIT@GMAIL.COM','arq')";
var query2 = "SELECT * FROM Alumnos";
var query3 = "UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2";
var query4= "DELETE FROM Alumnos WHERE Id = 2";


// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : 'parcial2_A01283410'
});

// Funcion que nos permite comprobar la conexión a la base de datos.
 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   con.query(query1, function(err, result){

    console.log (" insertar informacion de alumnos")
    console.log(result);
   })

  
   con.query(query2, function(err, result){
    console.log ("select")
    console.log(result);
    
   })

  
   
   con.query(query3, function(err, result){
    console.log("Actualizar el nombre del segundo registro de la tabla Alumnos.")
    console.log(result);
   })



   con.query(query4, function(err, result){
    console.log("Borrar segundo registro de la tabla Alumnos.")
    console.log(result);
   })


 });



// Funcion que nos devolverá resultados de la base de datos.
  /*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;

    // Bucle que recore los resultados y pinta en consola.
    for(i=0; i<result.length; i++){
    	console.log("Result: " + result[i].name);
    }

  });
});
*/