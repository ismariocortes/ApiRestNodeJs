/* 
    Created on : 5 dec 2020
    Author     : Mario Cortés
    Master     : Dirección y Gestión de Proyectos Web
    Asignatura : Ingeniería y Desarrollo en la Web
*/

const { Schema, model } = require("mongoose");

// Se define la estructura de la tabla User
const UserSchema = new Schema({
    name: { type: String, required: true },
    telephone: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    token: {type: String}
},{ 
    timestamps: true 
})

module.exports = model('User',UserSchema, 'users');