import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { Post } from './models/post';
import { User } from './models/user';
import { Comment } from './models/comment';
 
const app = express();

const posts = [
  new Post(0, 'Testtitle', 'Testbody', 0),
  new Post(1, 'Testtitle #2', 'Testbody #2', 0)
];

const users = [
  new User(0, 'Testuser'),
  new User(1, 'Testuser #2')
];

const comments = [
  new Comment(0, 0, 'Testuser', 'Testcomment'),
  new Comment(1, 1, 'Testuser', 'Testcomment')
];

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  return res.send(posts);
});

app.get('/users', (req, res) => {
  return res.send(users);
});

app.get('/comments', (req, res) => {
  if (req.query.postId) {
    return res.send(comments.filter(o => o.postId === Number(req.query.postId)));
  } else {
    return res.send(comments);
  }  
});

app.post('/comments', (req, res) => {
  const lastId = comments.sort((a, b) => (a.id > b.id) ? 1 : -1)[comments.length - 1].id;
  const newComment = new Comment(lastId + 1, req.body.postId, req.body.name, req.body.body);

  if (newComment.isValid()) {
    comments.push(newComment);
    res.status(201);
    return res.send(newComment);
  } else {
    res.status(406);    
    return res.send();
  }  
});

app.delete('/comments/:id', (req, res) => {
  const comment = comments.find(o => o.id === Number(req.params.id));

  if (comment) {
    comments.splice(comments.findIndex(o => o.id === Number(req.params.id)));
    res.status(204);
  } else {
    res.status(404);
  }  
  
  return res.send();
});
 
app.listen(process.env.PORT, () =>
  console.log(`Blog Backend listening on port ${process.env.PORT}`),
);