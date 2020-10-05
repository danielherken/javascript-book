<template>
  <Post v-if="getPost()" :post="getPost()" />
</template>

<script>
import { mapGetters } from 'vuex';
import Post from '~/components/Post';

export default {
  components: {
    Post,
  },
  computed: {
    ...mapGetters(['allPosts']),
  },
  methods: {
    getPost() {
      return this.allPosts.find((o) => o.id == this.$route.params.id);
    },
  },
};
</script>
