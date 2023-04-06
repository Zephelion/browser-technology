import express from 'express';
import { engine }  from 'express-handlebars';
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();


const hostname = '127.0.0.1';
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urlEncoded = express.urlencoded({ extended: true });
app.use(urlEncoded);
app.use(express.json());


app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
