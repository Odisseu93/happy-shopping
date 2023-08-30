import { fileURLToPath } from 'url';
import { dirname } from 'path';

import express from 'express';
import { engine, create } from 'express-handlebars';
import ProductRoutes from './routes/ProductRoutes.js';

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'src/views');

create({
  partialsDir: ['views/partials'],
});

const port = 3000;

app.use(express.static(`${dirName}/../public`));

app.use('', ProductRoutes);

app.listen(port, () => console.log('Servidor na porta: %d', port, `${dirName}/../public`));