import fs from 'node:fs';
import path from 'node:path';
import mongoose from 'mongoose';

// Carrega variáveis de um arquivo .env simples, caso exista.
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
    for (const linha of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
        const texto = linha.trim();
        if (!texto || texto.startsWith('#')) continue;
        const separador = texto.indexOf('=');
        if (separador < 1) continue;
        const chave = texto.slice(0, separador).trim();
        const valor = texto.slice(separador + 1).trim().replace(/^['"]|['"]$/g, '');
        if (!process.env[chave]) process.env[chave] = valor;
    }
}

export async function conectarBanco() {
    const url = process.env.MONGODB_URI;
    if (!url) {
        console.warn('MongoDB não ta configurado.');
        return false;
    }
    await mongoose.connect(url);
    console.log('MongoDB conectado com sucesso.');
    return true;
}

export default mongoose;
