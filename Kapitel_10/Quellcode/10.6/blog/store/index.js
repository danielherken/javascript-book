export const state = () => ({
  posts: [],
  users: []
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setUsers(state, users) {
    state.users = users;
  }
}

export const getters = {
  allPosts(state) {
    return state.posts;
  },
  allAuthors(state) {
    return state.users;
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {

    let posts = [];
    try {
      posts = await this.$axios.$get('http://localhost:3001/posts');
    } catch (e) {
      console.error(e);
    } finally {
      commit('setPosts', posts);
    }

    let users = [];
    try {
      users = await this.$axios.$get('http://localhost:3001/users');
    } catch (e) {
      console.error(e);
    } finally {
      commit('setUsers', users);
    }
  },
}
