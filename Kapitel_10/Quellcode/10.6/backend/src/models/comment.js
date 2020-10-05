export class Comment {
  constructor(id, postId, name, body) {
    this.id = id;
    this.postId = postId;
    this.name = name;
    this.body = body;
  }

  isValid() {
    return this.postId > 0 && this.body && this.body.length > 0 && this.name && this.name.length > 0;
  }
}