const admin = require("firebase-admin");
const keys=require("../keys.json");


admin.initializeApp({
    credential:admin.credential.cert(keys)
});

const bd=admin.firestore();
const usuarios=bd.collection("ejemplodb");
const productos=bd.collection("productos");
const ventas = bd.collection("ventas"); //coleccion de ventas

module.exports={
usuarios,
productos,
ventas
}

//console.log(usuarios);