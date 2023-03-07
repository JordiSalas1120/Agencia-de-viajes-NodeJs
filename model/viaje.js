import  Sequelize  from "sequelize";
import db from "../config/db.js";

//aquib declarariamos las tablas o datos de nuestra base de datos utilizando sequelize
export const Viajes = db.define('viajes',{//le pasamos la tabla "viajes"
    titulo:{
        type: Sequelize.STRING
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    },
});