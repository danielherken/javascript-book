import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { DataAccess } from './dataAccess';
import { Post } from './models/post';
import { User } from './models/user';
import { Comment } from './models/comment';
 
const app = express();
const dataAccess = new DataAccess();

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  return res.send(dataAccess.posts);
});

app.get('/comments', (req, res) => {
  if (req.query.postId) {
    return res.send(dataAccess.getCommentsByPostId(req.query.postId));
  } else {
    return res.send(dataAccess.comments);
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Blog Backend listening on port ${process.env.PORT}`),
);