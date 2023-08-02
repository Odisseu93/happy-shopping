import { fileURLToPath } from 'url';
import { dirname } from 'path';

import express from 'express';
import { engine, create } from 'express-handlebars';

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

app.get('/purchase/:code', async (req, res) => {
  const { code } = req.params;
  const productRes = await fetch(`https://dummyjson.com/products/${code}`);
  const json = await productRes.json();
  const product = json;

  if (product) console.log(product);
  res.render('purchase', { product });
});

app.get('/', async (req, res) => {
  const productsRes = await fetch('https://dummyjson.com/products');
  const json = await productsRes.json();
  const { products } = json;

  res.render('home', { products });
});

app.listen(port, () => console.log('Servidor na porta: %d', port, `${dirName}/../public`));
