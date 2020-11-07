import Vue from 'vue';
import Vuex, { GetterTree, ActionTree, MutationTree } from 'vuex';
import { PostModel } from '~/models/PostModel';
import { UserModel } from '~/models/UserModel';

Vue.use(Vuex);

interface State {
  posts: PostModel[],
  users: UserModel[]
}

const state: State = {
  posts: [],
  users: []
};

const mutations: MutationTree<State> = {
  setPosts (state: State, posts: PostModel[]) {
    state.posts = posts;
  },
  setUsers (state: State, users: UserModel[]) {
    state.users = users;
  }
};

const getters: GetterTree<State, any> = {
  posts: state => state.posts,
  users: state => state.users
};

const actions: ActionTree<State, State> = {
  async nuxtServerInit ({ commit }) {
    let posts: PostModel[] = [];
    try {
      posts = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/posts'
      );
    } catch (e) {
      console.error(e);
    } finally {
      commit('setPosts', posts);
    }

    let users: UserModel[] = [];
    try {
      users = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/users'
      );
    } catch (e) {
      console.error(e);
    } finally {
      commit('setUsers', users);
    }
  }
};

export default () => new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
