const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "ola"
    });
});

app.get('/produtos', (req, res) => {
    res.json([{nome: 'celular'}, {nome: 'tv'}, {nome: 'sofa'}])

})




const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    console.log('Estou rodando ' + PORT)

})