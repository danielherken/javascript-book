export const state = () => ({
  posts: [],
  authors: [],
  comments: [],
});

export const getters = {
  allPosts(state) {
    return state.posts;
  },
  allAuthors(state) {
    return state.authors;
  },
  allComments(state) {
    return state.comments;
  },
};

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setAuthors(state, authors) {
    state.authors = authors;
  },
  addComments(state, { postId, comments }) {
    // Der sogenannte Spread Operator kopiert den kompletten Array
    // state.comments in ein neues Array
    const newComments = [...state.comments];
    newComments[postId] = comments;

    state.comments = newComments;
  },
};

export const actions = {
  async loadInitialData({ commit }) {
    try {
      const posts = await this.$axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      commit('setPosts', posts.data);
    } catch (e) {
      console.error(e);
    }

    try {
      const authors = await this.$axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      commit('setAuthors', authors.data);
    } catch (e) {
      console.error(e);
    }
  },
};
