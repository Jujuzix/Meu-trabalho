const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Produtos Principais' });
});

app.get('/prods', (req, res) => {
  res.render('prods', { message: ' Mais' });
});

app.get('/prod', (req, res) => {
  res.render('prod', { message: ' Sobre' });
});

app.get('/prod1', (req, res) => {
  res.render('prod1', { message: ' Sobre1' });
});

app.get('/prod2', (req, res) => {
  res.render('prod2', { message: ' Sobre2' });
});

app.get('/prod3', (req, res) => {
  res.render('prod3', { message: ' Sobre3' });
});

app.get('/prod4', (req, res) => {
  res.render('prod4', { message: ' Sobre4' });
});

const produtos = [
  {id: 1, nome:"nome", preco:"400", descrica:"Descrição"},
  {id: 1, nome:"nome", preco:"400", descrica:"Descrição"},
  {id: 1, nome:"nome", preco:"400", descrica:"Descrição"},
  {id: 1, nome:"nome", preco:"400", descrica:"Descrição"},
  {id: 1, nome:"nome", preco:"400", descrica:"Descrição"},
  {id: 1, nome:"nome", preco:"400", descrica:"Descrição"},
  {id: 1, nome:"nome", preco:"400", descrica:"Descrição"},
  {id: 1, nome:"nome", preco:"400", descrica:"Descrição"},
  {id: 1, nome:"nome", preco:"400", descrica:"Descrição"},
  {id: 1, nome:"nome", preco:"400", descrica:"Descrição"},

]

app.get('/prod5', (req, res) => {
  res.render('prod5', { message: ' Sobre5' });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
