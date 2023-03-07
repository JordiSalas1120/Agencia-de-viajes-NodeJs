import  Sequelize  from "sequelize";
import db from "../config/db.js";

//aquib declarariamos las tablas o datos de nuestra base de datos utilizando sequelize
export const Testimoniales = db.define('testimoniales',{//le pasamos la tabla "viajes"
    nombre:{
        type: Sequelize.STRING
    },
    correo:{
        type: Sequelize.STRING
    },
    mensaje:{
        type: Sequelize.STRING
    },
});