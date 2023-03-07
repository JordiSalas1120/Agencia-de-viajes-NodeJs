
import { Testimoniales } from "../model/testimoniales.js";
const guardarTestimoniales =  async (req, res)=>{
    //validar formulario
    //console.log(req.body);
    const { nombre, correo, mensaje } = req.body//para eso son las etiquetas name en le form
    const errores = []

    if(nombre.trim() === ''){
        errores.push({mensaje:'El nombre esta vacio'});
    }
    if(correo.trim() === ''){
        errores.push({mensaje:'El correo esta vacio'});
        
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje:'El mensaje esta vacio'});
       
    }
    if(errores.length > 0){
        console.log(errores);
        const testimoniales = await Testimoniales.findAll()
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        ///=conexion a la tabla de testimoniales

        try {
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log('error en almacenar testimonial');
        }
    }
}
export{
    guardarTestimoniales
    
}
