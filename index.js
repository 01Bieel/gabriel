const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "ola"
    });
});

const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    console.log('Estou rodando ' + PORT)
})