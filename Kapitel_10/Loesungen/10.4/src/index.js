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

app.post('/comments', (req, res) => {
  const comment = new Comment(0, req.body.postId, req.body.name, req.body.body);

  if (comment.isValid() && dataAccess.addComment(comment)) {
    res.status(201);
    return res.send();
  } else {
    res.status(406);    
    return res.send();
  }  
});

app.delete('/comments/:id', (req, res) => {
  if (!dataAccess.deleteComment(req.params.id)) {
    res.status(404);
  }  
  
  return res.send();
});
 
app.listen(process.env.PORT, () =>
  console.log(`Blog Backend listening on port ${process.env.PORT}`),
);