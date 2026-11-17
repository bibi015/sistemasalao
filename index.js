import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
//import { conexao } from './config/conexao.js';  
import routes from './routes/route.js';
import ClienteRoutes from './routes/ClienteRoutes.js';
import ProfissionalRoutes from './routes/ProfissionalRoutes.js';
import SiteRoutes from './routes/SiteRoutes.js';

const PORT = process.env.PORT || 3001;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(ClienteRoutes);
app.use(ProfissionalRoutes);
app.use(routes);
app.use(SiteRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Ocorreu um erro no servidor. Verifique se o MongoDB está configurado e tente novamente.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

export default app;
