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
    const posts = [{ 
      userId: 1,
      id: 1,
      title: 'Test Post',
      body: 'quia et suscipit suscipit'
    },
    { 
      userId: 10,
      id: 10,
      title: 'Test Post #10',
      body: 'quia et suscipit suscipit'
    }];

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
