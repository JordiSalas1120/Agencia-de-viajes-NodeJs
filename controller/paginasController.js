import { Viajes } from "../model/viaje.js"
import { Testimoniales } from "../model/testimoniales.js"

const paginaInicio =  async(req, res) => {
    const promiseDB =[];
    promiseDB.push(Viajes.findAll({ limit: 3 }))
    promiseDB.push(Testimoniales.findAll({ limit: 3 }))
    try {
        const resultado = await  Promise.all(promiseDB);//de este modo mejora el perfomrance, si viaje dura 10 y testimonial otros 10, no lo hace uno a uno y demore 20 seg, sino que lo hace todo y duraria solo 10seg
       

        res.render('inicio',{//en el render primero va el como se llamare  y luego se colocan variable. se pueden colocar multiples y si llave y valor es igual solo se coloca uno de los dos
        pagina: 'inicio',
        clase: 'home',
        viajes: resultado[0],//resultado es un  arreglo
        testimoniales: resultado[1]
    })
    } catch (error) {
        console.log('error en inicio viajes');
    }
    
}
const paginaNosotros =  (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes =  async(req, res) => {
    //consultar a la db
    const viajes = await Viajes.findAll()

    
 
    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    })
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimoniales.findAll()
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log('error a la hora de hacer peticion de testimoniales');
    }
    
}
const paginaDetalleViaje =  async(req, res) => {
    const { slug } = req.params;//la variable que se crea es como cremos en el router el comodin :viaje

    try {
        const viaje = await Viajes.findOne({where:{slug}})//si el comodin le cambio a slug se omite el slug viaje y solo se coloca slug ya que llave y valor iguales solo se coloca uno de ellos
        res.render('viaje', {
            pagina: 'Informacion de Viaje',
            viaje
        })

    } catch (error) {
        console.log(error);
    }    

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}