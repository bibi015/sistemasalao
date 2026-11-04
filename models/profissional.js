import mongoose from '../config/conexao.js';

const Profissional = mongoose.Schema({
    nome: { type: String, required: true },
    especialidade: { type: String, required: true },
    clientes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }]
});

export default mongoose.model('Profissional', Profissional);
