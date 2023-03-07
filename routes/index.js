import express from 'express'
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controller/paginasController.js'
import { guardarTestimoniales } from '../controller/testimonialController.js';
//habilitamos las rutas desde aqui
const router = express.Router()//usamos la intancia de express pero expantiendolo con su router
router.get('/', paginaInicio);

router.get('/nosotros',paginaNosotros)

router.get('/viajes',paginaViajes)

router.get('/viajes/:slug',paginaDetalleViaje)//el ':slug' es un comodin asi no se coloca una a una las rutas de los botones que dirigen a mas informacion en este proyeto... la variable se crea en  req.params y se crea siempre con el nombre que se le dio aqui como en este caso es slug

router.get('/testimoniales',paginaTestimoniales)
router.post('/testimoniales', guardarTestimoniales)

export default router