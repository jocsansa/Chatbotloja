const express = require("express");
const app = express( );





app.get('/',(req, res)=>{
  res.send("Ola Mundo");
})







app.listen(3000, '127.0.0.1',()=>{
  console.log('Servidor Rodando');
})