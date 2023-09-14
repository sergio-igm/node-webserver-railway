import express from 'express';
import hbs from 'hbs';
import dotenv from 'dotenv';

dotenv.config();
const app = express()

const APP_HOME = process.cwd();

app.set('view-engine', 'hbs');
hbs.registerPartials(APP_HOME + '/views/partials')

app.use(express.static('public'));

app.get('/generic', (req, res) => {
    res.sendFile(APP_HOME + '/public/generic.html');
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        titulo: "Curso Node",
        nombre: "YO"
    });
});

app.get('/elements', (req, res) => {
    res.render('elements.hbs', {
        titulo: "Curso Node",
        nombre: "YO"
    });
});

app.get('/generic', (req, res) => {
    res.render('generic.hbs', {
        titulo: "Curso Node",
        nombre: "YO"
    });
});

app.listen(process.env.PORT, () => console.log(`server abierto en 127.0.0.1:${process.env.PORT}`));