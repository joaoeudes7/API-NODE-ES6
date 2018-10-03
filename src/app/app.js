import express from 'express';

import bodyParser from 'body-parser';
import helmet from 'helmet';
import errorHandler from './middlewares/errorHandler';

import Projects from './routes/Project.routes';
import Users from './routes/Users.routes';
import Auth from './routes/Auth.routes';
import Register from './routes/Register.routes';

const app = express();
const port = 3000;

// Set up middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API to prevent attacks
app.use(helmet());

app.use('/auth', Auth);
app.use('/register', Register);
app.use('/projects', Projects);
app.use('/user', Users);

// global error handler
app.use(errorHandler)

app.get('/', (req, res) => {
  res.send(`The API-REST is Online`);
});

app.listen(port);
console.log(`Started on Port: ${port}`)

export default app;
