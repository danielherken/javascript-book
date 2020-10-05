import Database from 'better-sqlite3';

export class DataAccess {
  constructor() {
    this.db = new Database(':memory:');

    this.createDatabase();
    this.seedDatabase();
  }

  createDatabase() {
    this.db.prepare('CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, title TEXT, body TEXT, userId INTEGER)').run();
    this.db.prepare('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)').run();
    this.db.prepare('CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY, name TEXT, body TEXT, postId INTEGER)').run();
  }  

  seedDatabase() {    
    if (this.posts.length === 0) {
      const insertPost = this.db.prepare('INSERT INTO posts (title, body, userId) VALUES (?, ?, ?)');
      insertPost.run('Testtitle', 'Testbody', 0);    
      insertPost.run('Testtitle #2', 'Testbody #2', 0);
    }

    if (this.users.length === 0) {
      const insertUser = this.db.prepare('INSERT INTO users (name) VALUES (?)');
      insertUser.run('Testuser');
      insertUser.run('Testuser #2');
    }

    if (this.comments.length === 0) {
      const insertComment = this.db.prepare('INSERT INTO comments (name, body, postId) VALUES (?, ?, ?)');
      insertComment.run('Testuser', 'Testbody', 0);
    }
  }

  get posts() {
    return this.returnAsArray(this.db.prepare('SELECT * FROM posts').all());
  }

  get users() {
    return this.returnAsArray(this.db.prepare('SELECT * FROM users').all());
  }

  get comments() {
    return this.returnAsArray(this.db.prepare('SELECT * FROM comments').all());
  }

  getCommentsByPostId(postId) {
    return this.returnAsArray(this.db.prepare('SELECT * FROM comments WHERE postId = ?').all(postId));
  }

  getCommentById(id) {
    return this.db.prepare('SELECT * FROM comments WHERE id = ?').get(id);
  }

  addComment(comment) {
    const result = this.db.prepare('INSERT INTO comments (name, body, postId) VALUES (?, ?, ?)').run(comment.name, comment.body, comment.postId);

    return result.changes > 0;
  }

  addPost(post) {
    const result = this.db.prepare('INSERT INTO posts (title, body, userId) VALUES (?, ?, ?)').run(post.title, post.body, post.authorId);

    return result.changes > 0;
  }  

  deleteComment(id) {
    const result = this.db.prepare('DELETE FROM COMMENTS WHERE id = ?').run(id);
    return result.changes > 0;
  }

  returnAsArray(items) {
    if (Array.isArray(items)) {
      return items;
    }

    return items ? [items] : [];
  }  
}