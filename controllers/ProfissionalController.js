import Profissional from '../models/profissional.js';
import Cliente from '../models/cliente.js';

export default class ProfissionalController {
    constructor(caminhoBase = 'profissional/') {
        this.openAdd = async (req, res) => {
            const clientes = await Cliente.find({});
            res.render(caminhoBase + 'add', { clientes });
        };
        this.add = async (req, res) => {
            await Profissional.create({ nome: req.body.nome, especialidade: req.body.especialidade, clientes: req.body.clientes || [] });
            res.redirect('/profissional/lst');
        };
        this.list = async (req, res) => {
            const resultado = await Profissional.find({}).populate('clientes');
            res.render(caminhoBase + 'lst', { Profissionais: resultado });
        };
        this.find = async (req, res) => {
            const resultado = await Profissional.find({ nome: { $regex: req.body.filtro || '', $options: 'i' } }).populate('clientes');
            res.render(caminhoBase + 'lst', { Profissionais: resultado });
        };
        this.openEdt = async (req, res) => {
            const profissional = await Profissional.findById(req.params.id);
            const clientes = await Cliente.find({});
            res.render(caminhoBase + 'edt', { Profissional: profissional, clientes });
        };
        this.edt = async (req, res) => {
            await Profissional.findByIdAndUpdate(req.params.id, { nome: req.body.nome, especialidade: req.body.especialidade, clientes: req.body.clientes || [] });
            res.redirect('/profissional/lst');
        };
        this.del = async (req, res) => {
            await Profissional.findByIdAndDelete(req.params.id);
            res.redirect('/profissional/lst');
        };
    }
}
