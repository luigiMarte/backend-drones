// App.js --> Para configurar express
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import pack from '../package.json';

import { createRoles } from './libs/initialSetup';

import userInfoRoutes from './routes/userInfo.routes';
import authRoutes from './routes/auth.routes';
import path from 'path';
// import { fileURLToPath } from 'url';

const app = express();
app.use(cors());
createRoles();

// usamos metodo set de express
app.set('pack', pack);

// Morgan es un middleware de express xa mostrar GET, stados en consola
app.use(morgan('dev'));

// para que express use json con los datos del servidor
app.use(express.json());
app.get('/', (req, res) => {
  res.json({
    author: app.get('pack').author,
    description: app.get('pack').description,
    version: app.get('pack').version,
  });
});

app.use('/api/users', userInfoRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, '../dist')));
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
// });

export default app;
