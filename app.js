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
  {id: 1, nome:"Placa de Vídeo RX ", preco:"2,149,99", descricao:"Com a tecnologia se movendo tão rápido, a GIGABYTE ainda acompanha as últimas tendências e oferece aos nossos clientes recursos avançados e tecnologia de ponta. As placas mãe GIGABYTE Série B660 vêm com solução de energia atualizada, padrões de armazenamento mais recentes e conectividade excepcional para otimizar o desempenho para jogos.O desempenho sem aceleração das placas mãe GIGABYTE Série B660 é garantido por um design térmico inovador e otimizado para garantir a melhor estabilidade de CPU, chipset, SSD e baixas temperaturas sob carga total e jogos.As placas-mãe GIGABYTE Série B660 permitem que você experimente a máxima flexibilidadede conexão e velocidade de transferência de dados incrível com rede e armazenamento de última geração.", img:" https://images.kabum.com.br/produtos/fotos/475438/placa-de-video-rx-6750-xt-mech-2x-12g-v1-radeon-12gb-gddr6-freesync-dual-fan_1689965385_g.jpg"},
  {id: 2, nome:"Gabinete Gamer Rise Mode", preco:"649,99", descricao:"O Gabinete Gamer Rise Mode Galaxy Glass Preto possui design futurista e gamer.Com Lateral e Fronte em Vidro Temperado,tenha maior visibiliade e acesso de todos seus componentes para um visual dinâmico.", img:"https://images.kabum.com.br/produtos/fotos/320908/gabinete-gamer-rise-mode-galaxy-glass-lateral-em-vidro-temperado-preto-rm-ga-gg-fb_1657738212_g.jpg "},
  {id: 3, nome:"Monitor Gamer Lg 34", preco:"2.099,99", descrica:"Se você está buscando uma experiência imersiva nos mais variados tipos de jogos como estratégia, RPS, corrida, esse monitor é ideal para você. Com a tela em resolução QHD UltraWide (resolução 3440x1440), você ganha 30% a mais de área de tela e assim não perde nenhum detalhe do jogo. E mais, o modelo ainda conta com o som estéreo 7W com MaxxAudio. Além disso, com a tela na proporção 21:9 você também ganha mais produtividade, já que pode acessar dois conteúdos simultaneamente na mesma tela,podendo assim jogar e stremar ou trabalhar ao mesmo tempo.", img:"https://images.kabum.com.br/produtos/fotos/472908/monitor-gamer-lg-34-polegadas-curvo-led-wqhd-ultrawide-160hz-1ms-displayport-e-hdmi-amd-freesync-premium-hdr10-99-srgb-34gp63a-b_1689879423_g.jpg"}, 
  {id: 4, nome:"Mouse Gamer HyperX", preco:"109,99", descrica:"Oferece aos jogadores o melhor em estilo e conteúdo, oferecendo extrema precisão graças a seu sensor Pixart 3389 e efeitos de iluminação RGB espetaculares em 360° com seu exclusivo anel de luzes. O Pulsefire Surge possui configurações DPI nativas até 16.000 DPI para uma precisão que vai satisfazer até os gamers mais exigentes. Switches Omron com capacidade para 50 milhões de cliques asseguram que assim que você tenha aquele tiro na mira, seu clique será registrado. Personalize o DPI do mouse, defina cores de LED individualizadas, atribua macros e salve diretamente no seu mouse com o software HyperX NGenuity. O Pulsefire Surge também vem equipado com grandes skates para permitir um deslizar suave e controlado.Switches Omron confiáveis e ágeis com capacidadepara 50 milhões de cliques oferecem rápido retorno tátil e dão máxima confiança nos seus cliques.", img:"https://images.kabum.com.br/produtos/fotos/95566/95566_1522950995_index_g.jpg"},
  {id: 5, nome:"Headset Gamer Havit", preco:"249,99", descrica:"Headset Gamer Havit H2002DAparência e textura proporcionais, simples e generosas.Jaqueta de liga leve com frente e superfície de  plástico com revestimento de piano. Design Gamer em preto, para combinar com seu setup e além de ter qualidade surpreendente por um preço  baixo. Head set Gamer Havit com excelente custo  benefício. Desempenho e Compatibilidade com PC,  PS4 e XBOX Faixa de cabeça ajustável suspensa única,design ergonômico, confortável de usar, antiviolência e não fácil de danificar. À prova de desgaste, resistente a arranhões e  atualizado e adequado para pessoas diferentes,   o peso de toda a máquina é moderado, desgastando  por muito tempo sem pressão. Microfone plugável  de 3,5 mm compatível para PC, PS4 e XBOX e  Alto-falante magnético de 53 mm de alta qualidade de som para distinguir o som dos jogos e a frequência fracionária alta e baixa meticulosa ao ouvir música. Headset Gamer Havit está no KaBuM!", img:"https://images.kabum.com.br/produtos/fotos/102770/headset-gamer-havit-drivers-53mm-hv-h2002d_headset-gamer-havit-drivers-53mm-hv-h2002d_1564056874_g.jpg"},
  {id: 6, nome:"Cadeira Gamer Mymax MX7", preco:"628,08", descrica:"A nova linha de Cadeira Gamer Mymax, são as mais iradas do mercado, a MX5 possui design ergonômico e revestimento em tecido sintético PU.Projetada para proporcionar conforto mesmo  após horas jogando. Esse conforto foi obtido através do uso de espuma injetada de alta densidade no encosto e assento, aliado a possibilidade de inclinaro encosto em até 180° e da função balanço.", img:"https://images.kabum.com.br/produtos/fotos/sync_mirakl/391058/Cadeira-Gamer-Mymax-MX7-At-150KG-Girat-ria-Preto-Gold-Edition_1695036496_g.jpg"},
  {id: 7, nome:"Console Nintendo Switch Oled", preco:"2.138,07", descrica:"Conheça o mais novo  membro da família: O novo sistema apresenta uma tela OLED vibrante de 7 polegadas, um amplo suporte ajustável, um dock com uma porta LAN com fio, 64 GB de armazenamento interno e áudio aprimorado.", img:"https://images.kabum.com.br/produtos/fotos/385192/console-nintendo-switch-oled-com-joy-con-branco-hbgskaaa2_1663593573_g.jpg"},
  {id: 8, nome:"Microfone Gamer HyperX", preco:"799,99", descrica:"O HyperX QuadCast é o microfone independente ideal com todos os  recursos para o streamer ou podcaster que procura um microfone com som de qualidade. O QuadCast vem  com sua própria base 'shock mount' antivibração paraajudar a reduzir os ruídos da vida diária e um filtrointegrado para abafar sons percussivos desagradáveis.Saiba instantaneamente o status do seu microfone com o indicador em LED e simplesmente toque para colocá-lo em mudo para evitar acidentes inconvenientes na transmissão. ", img:"https://images.kabum.com.br/produtos/fotos/117767/microfone-gamer-hyperx-quadcast-s-led-usb-preto-e-vermelho-hmiq1s-xx-rg-g_1602169935_g.jpg"},
  {id: 9, nome:"Mousepad Gamer HyperX", preco:"59,99", descrica:"Informações adicionais:- Costuras perfeitas que não desfiam: O FURY S Speed Edition possui bordas com costura perfeita que não desfiam, superfície uniforme e fluida para o mouse e  resistência ao desgaste diário- Superfície com trama compacta para movimento  óptico‑preciso: O FURY S Speed Edition apresenta um tecido com trama compacta com sensação suave ao toque e oferece um deslizar consistente. É texturizado para o movimento preciso do mouse óptico.", img:"https://images.kabum.com.br/produtos/fotos/98068/98068_1535054657_g.jpg"},
  {id: 10, nome:"Teclado Gamer Hyperx", preco:" 307,97", descrica:"Estrutura em alumínio durável Com uma estrutura de alumínio sólida, o Alloy MKW100 foi projetado para fornecer estabilidade quando os toques em teclas estiverem a todo vapor.O descanso para pulso removível ajuda areduzir a fadiga de longas sessões de jogos ou de trabalho.Switches à prova de poeira responsivos e confiáveisCom switches mecânicos à prova de poeira com classificação de até 50 milhões de toques, você usufruirá a confiabilidade duradoura e silenciosa do Alloy MKW100.O conector USB em metal dourado impede a corrosão, enquanto a trança de tecido aumenta a longevidade do cabo para anos de uso confiável.Personalize o show de luz RGB do Alloy MKW100 com o poderoso software HyperX NGENUITY fácil de usar.", img:"https://images.kabum.com.br/produtos/fotos/sync_mirakl/205718/Teclado-Gamer-Hyperx-Alloy-Core-RGB-Membrana-Preto-HX-KB5ME2-BR_1697569132_g.jpg"},

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
