export default class SiteController {
    constructor() {
        this.home = (req, res) => res.render('site/index');
        this.servicos = (req, res) => res.render('site/servicos');
        this.profissionais = (req, res) => res.render('site/profissionais');
        this.pacotes = (req, res) => res.render('site/pacotes');
        this.agendar = (req, res) => res.render('site/agendar');
        this.confirmacao = (req, res) => res.render('site/confirmacao', { dados: req.query });
    }
}
