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

    try {
      const posts = await this.$axios.get('https://jsonplaceholder.typicode.com/posts');
      commit('setPosts', posts.data);
    } catch (e) {
      console.error(e);
    }

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
  }
}


