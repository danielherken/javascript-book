import 'dotenv/config';
import cors from 'cors';
import express from 'express';
 
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Startseite!');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/bye', (req, res) => {
  res.send('Bye World!');
});

app.get('/info', (req, res) => {
  res.send('Version 1.0.0');
});
 
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`),
);