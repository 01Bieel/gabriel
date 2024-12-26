const express = require('express');

const app = express();

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