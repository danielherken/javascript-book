export const state = () => ({
  posts: [],
  users: [],
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setUsers(state, users) {
    state.users = users;
  },
};

export const getters = {
  posts(state) {
    return state.posts;
  },
  users(state) {
    return state.users;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let posts = [];
    try {
      posts = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/posts'
      );
    } catch (e) {
      console.error(e);
    } finally {
      commit('setPosts', posts);
    }

    let users = [];
    try {
      users = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/users'
      );
    } catch (e) {
      console.error(e);
    } finally {
      commit('setUsers', users);
    }
  },
};
