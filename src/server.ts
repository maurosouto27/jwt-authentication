import express from 'express';

const PORT = 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hola, esto anda!');
})
console.log(process.env.PORT)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})