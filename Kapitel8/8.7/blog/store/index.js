export const state = () => ({
  posts: [],
  authors: []
})

export const getters = {
  allPosts(state) {
    return state.posts;
  },
  allAuthors(state) {
    return state.authors;
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setAuthors(state, authors) {
    state.authors = authors
  }
}

export const actions = {
  async loadInitialData({ commit }) {
    const posts = [
      { userId: 1, id: 1, title: 'Test Post', body: 'quia et suscipit suscipit ' },
      { userId: 2, id: 2, title: 'Test Post #2', body: 'quia et suscipit suscipit' },
      { userId: 1, id: 3, title: 'Test Post #3', body: 'quia et suscipit suscipit' },
      { userId: 2, id: 4, title: 'Test Post #4', body: 'quia et suscipit suscipit' },
      { userId: 1, id: 5, title: 'Test Post #5', body: 'quia et suscipit suscipit' },
      { userId: 2, id: 6, title: 'Test Post #6', body: 'quia et suscipit suscipit' },
      { userId: 1, id: 7, title: 'Test Post #7', body: 'quia et suscipit suscipit' },
      { userId: 2, id: 8, title: 'Test Post #8', body: 'quia et suscipit suscipit' },
      { userId: 1, id: 9, title: 'Test Post #9', body: 'quia et suscipit suscipit' },
      { userId: 2, id: 10, title: 'Test Post #10', body: 'quia et suscipit suscipit' }
    ];
    commit('setPosts', posts);

    const authors = [
      {
        id: 1,
        name: 'Lea'
      },
      {
        id: 2,
        name: 'Luke'
      }
    ];

    commit('setAuthors', authors);
  },
}
