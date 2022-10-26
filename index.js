const express = require('express');
const path = require('path');
const app = express();

//moiddlewears control de las peticiones 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//todo lo que esté en public, será disponible como servicios o peticiones GET (imagenes, archivos, etc)
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send('Servidor funcional')
})

app.listen(8081,()=>{
    console.log('Servidor en linea')
})