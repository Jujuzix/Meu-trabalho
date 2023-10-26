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
  {id: 1, nome:"Placa de Vídeo RX ", preco:"2,149,99", descrica:"", img:" https://images.kabum.com.br/produtos/fotos/475438/placa-de-video-rx-6750-xt-mech-2x-12g-v1-radeon-12gb-gddr6-freesync-dual-fan_1689965385_g.jpg"},
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

app.get('/prod6', (req, res) => {
  res.render('prod6', { message: ' Sobre6' });
});

app.get('/prod7', (req, res) => {
  res.render('prod7', { message: ' Sobre7' });
});

app.get('/prod8', (req, res) => {
  res.render('prod8', { message: ' Sobre8' });
});

app.get('/prod9', (req, res) => {
  res.render('prod9', { message: ' Sobre9' });
});

app.get('/prod10', (req, res) => {
  res.render('prod10', { message: ' Sobre10' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
