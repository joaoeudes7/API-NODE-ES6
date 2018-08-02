import express from 'express';

import bodyParser from 'body-parser';
import helmet from 'helmet';

import Projects from './routes/Project.routes';
import Auth from './routes/Auth.routes';

const app = express();
const port = 3000;

// Set up middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API to prevent attacks
app.use(helmet());

app.use('/auth', Auth);
app.use('/projects', Projects);

app.get('/', (req, res) => {
  res.send(`The API-REST is Online`);
});

app.listen(port);

export default app;
