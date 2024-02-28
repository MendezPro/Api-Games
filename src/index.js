import app from './app.js';
import database from './database.js';


app.listen(process.env.PORT,()=> {
    console.log('Levantando en el puerto: '+ process.env.PORT)

});




/*const express = require('express')//mandas allamar a express una libreria para poder hacer las peticiones de express 
const app = express()// aqui se crea una instancia de express y sirve para poder hacer las peticiones de express 
const port = 3000//aqui se define el puerto de la aplicacion 

app.listen(3001, () => { //aqui se ejecuta el servidor en el puerto 3000 y se ejecuta la funcion flecha 
  console.log('Hello World!') //aqui se muestra el mensaje "Hello World!" con console.log para que se muestre en consola
})

app.get('/cuadrado', (req, res) => { //"req" de requiero la respuesta del servidor, cuando le aga la peticion a la raiz.
    res.send() //enonces ocupo lo que hay dentro, "res" es la respueata del servidor"
    console.log(req. params.id)//quiere decir que si le aga la peticion a la raiz, se le envia el parametro "id" y lo imprime en consola.
    res.json ({
        status: "Peticion por get recibida"
    })
  });
//estoy en mi index.js y desde aqui tengo que enviar un numero en decimal y respone en un json convertido en binario, en express
/*app.get('/', (req, res) => { //cuando le aga la peticion a la raiz
    res.send('Hello World!') //enonces ocupo lo que hay dentro, "res es la respueata del servidor"
  })*/