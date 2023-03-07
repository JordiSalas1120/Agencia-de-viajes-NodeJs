//en este js levantamos el servidor
//const express = require('express')
import express  from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app = express();

//nos conectamos a la base de datos 
db.authenticate()
    .then( () => console.log('se conecto a la db'))
    .catch(error => console.log(error))
    




//definimos elpuerto
const port = process.env.PORT || 4000

//aplicamos el Template Engine qu e e spara renderizar html usando pug
app.set('view engine', 'pug')

//todas estas instrucciones  se llaman middleware y se ejecuta una y luego la que le sigue... podemos crear las nuestras propias... Next nos permite que una vez se ejecute lo que haya en el arrow gunction siga al siguiente middleware
app.use((req, res, next) => {
    const year = new Date();
    //en locals es donde  se crean variables  en la respuesta y asi esas variables podemos compartirlas con las vistas
    res.locals.actualYear = year.getFullYear();
    res.locals.nombrePagina = "Agencia de Viajes"
    
    next()
})
//agregar body parser para leer los datos del formulario que son enviado una funcion de express
app.use(express.urlencoded({extended:true}))

//agragmos el router a la principal
//use es un verbo mas general usa el get, put, patch delete, todos a la vez
app.use('/', router)

//definir la carpeta publica 
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
})

