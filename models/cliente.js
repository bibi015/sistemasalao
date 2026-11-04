import mongoose from '../config/conexao.js';

const Cliente = mongoose.Schema({
    nome: { type: String, required: true },
    dataNasc: { type: Date, required: true },
    telefone: { type: String, required: true },
    foto: {
        type: Buffer,
        get: (valor) => valor ? `data:image/jpeg;base64,${valor.toString('base64')}` : null
    }
});

export default mongoose.model('Cliente', Cliente);
