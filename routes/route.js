import express from 'express';
const router = express.Router();
import controller from '../controllers/controller.js'
const controle = new controller();

router.get('/', (req, res) => res.redirect('/site'))
router.get('/teste', controle.teste)
router.post('/formulario', controle.formulario)
export default router