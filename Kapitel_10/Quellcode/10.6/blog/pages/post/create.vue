<template>
  <div>
    <b-input v-model="post.title" placeholder="Titel" />
    <b-input v-model="post.body" placeholder="Inhalt" />
    <b-input v-model="post.userId" placeholder="Author id" />
    <b-button @click="savePost()">Save</b-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => {
    return {
      post: {}
    }
  },
  methods: {
    async savePost() {
      try {
        await this.$axios.$post('http://localhost:3001/posts', this.post);
        alert('Beitrag wurde gespeichert!');
        this.post = {};
      } catch (error) {
        alert('Beitrag konnte nicht gespeichert werden.')
      }
    },
  },
};
</script>
