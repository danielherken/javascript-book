import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { DataAccess } from './dataAccess';
import { Post } from './models/posts';
import { User } from './models/user';
import { Comment } from './models/comment';
import { createSimpleLogger } from 'simple-node-logger';
 
const app = express();
const dataAccess = new DataAccess();
const log = createSimpleLogger('blog.log');
log.setLevel(process.env.LOGLEVEL);

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  log.debug('GET /posts');

  try {
    return res.send(dataAccess.posts);
  } catch (e) {
    log.error('Error getting posts', e);
  }
});

app.get('/users', (req, res) => {
  log.debug('GET /users');

  try {
    return res.send(dataAccess.users);
  } catch (e) {
    log.error('Error getting users', e);
  }
});

app.get('/comments', (req, res) => {
  log.debug('GET /comments with', req.query);

  try {
    if (req.query.postId) {
      log.info('Getting comments with postId', req.query.postId);
      return res.send(dataAccess.getCommentsByPostId(req.query.postId));
    } else {
      log.info('Getting all comments');
      return res.send(dataAccess.comments);
    }
  } catch (e) {
    log.error('Error getting comments', e);
  }
});

app.post('/comments', (req, res) => {
  log.debug('POST /comments with ', req.body);

  try {
    const comment = new Comment(0, req.body.postId, req.body.name, req.body.body);

    if (comment.isValid() && dataAccess.addComment(comment)) {
      log.info('New Comment created ', comment);
      res.status(201);
      return res.send();
    } else {
      log.warn('Comment is not valid ', comment);
      res.status(406);    
      return res.send();
    }  
  } catch (e) {
    log.error('Error creating new comment', e);
  }
});

app.post('/posts', (req, res) => {
  log.debug('POST /posts with ', req.body);

  try {
    const post = new Post(0, req.body.title, req.body.body, req.body.userId);

    if (dataAccess.addPost(post)) {
      log.info('New Post created ', post);
      res.status(201);
      return res.send();
    } else {
      log.warn('Post is not valid ', post);
      res.status(406);    
      return res.send();
    }  
  } catch (e) {
    log.error('Error creating new post', e);
  }
});

app.delete('/comments/:id', (req, res) => {
  log.debug('DELETE /comments with', req.params.id);

  try {
    if (!dataAccess.deleteComment(req.params.id)) {
      log.warn('Could not find comment to delete', req.params.id);
      res.status(404);
    }  
    
    return res.send();
  } catch (e) {
    log.error('Error deleting comment', e);
  }
});

app.get('*', (req, res) => {
  log.warn('Route not found: ', req.originalUrl);
  res.status(404);
  return res.send('Route does not exist. Possible GET routes are: /posts, /comments, /users');
});

app.post('*', (req, res) => {
  log.warn('Route not found: ', req.originalUrl);
  res.status(404);
  return res.send('Route does not exist. Possible POST routes are: /comments');
});

app.delete('*', (req, res) => {
  log.warn('Route not found: ', req.originalUrl);
  res.status(404);
  return res.send('Route does not exist. Possible DELETE routes are: /comments/[id]');
});
 
app.listen(process.env.PORT, () =>
  console.log(`Blog Backend listening on port ${process.env.PORT}`),
);