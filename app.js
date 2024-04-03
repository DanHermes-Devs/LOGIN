import express from 'express';
import dotenv from 'dotenv'; 
import cors from 'cors';
import db from './config/mysql.js';
import loginRoute from './routes/loginRoute.js';

dotenv.config();

const ENGINE_DB = process.env.ENGINE_DB;

const app = express();
app.use(cors());
app.set('view engine', 'pug');
app.set('views', './views');

// Carpeta publica
app.use(express.static('public'));

// Habilitar lectura de datos de un formulario
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use('/', loginRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

(ENGINE_DB === 'mysql') ? db : console.log('Database not connected');