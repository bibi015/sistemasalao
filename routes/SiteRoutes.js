import express from 'express';
import SiteController from '../controllers/SiteController.js';

const router = express.Router();
const controle = new SiteController();

router.get('/site', controle.home);
router.get('/site/servicos', controle.servicos);
router.get('/site/profissionais', controle.profissionais);
router.get('/site/pacotes', controle.pacotes);
router.get('/site/agendar', controle.agendar);
router.get('/site/confirmacao', controle.confirmacao);

export default router;
