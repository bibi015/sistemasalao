import Profissional from '../models/profissional.js';

async function carregarProfissionais(limite) {
    if (Profissional.db.readyState !== 1) return [];

    const consulta = Profissional.find({}).sort({ nome: 1 });
    if (limite) consulta.limit(limite);
    return consulta;
}

export default class SiteController {
    constructor() {
        this.home = async (req, res) => {
            const profissionais = await carregarProfissionais(4);
            res.render('site/index', { profissionais });
        };
        this.servicos = (req, res) => res.render('site/servicos');
        this.profissionais = async (req, res) => {
            const profissionais = await carregarProfissionais();
            res.render('site/profissionais', { profissionais });
        };
        this.pacotes = (req, res) => res.render('site/pacotes');
        this.agendar = async (req, res) => {
            const profissionais = await carregarProfissionais();
            res.render('site/agendar', { profissionais });
        };
        this.confirmacao = (req, res) => res.render('site/confirmacao', { dados: req.query });
    }
}
