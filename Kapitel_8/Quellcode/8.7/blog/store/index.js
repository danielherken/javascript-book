export const state = () => ({
    posts: []
  })
  
  export const getters = {
    allPosts(state) {
      return state.posts;
    }
  }
  
  export const mutations = {
    setPosts(state, posts) {
      state.posts = posts;
    }
  }
  
  export const actions = {
    loadInitialData({ commit }) {
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
      commit('setPosts', posts);
    },
  }
  