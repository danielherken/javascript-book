<template>
  <div>
    <Post
      v-for="(post, index) in currentPosts"
      :key="index"
      :post="post"
      :shortened="true"
    />
    <Pagination
      :page="currentPage"
      :items-count="posts.length"
      :items-per-page="5"
      @pageChanged="pageChanged"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from '~/components/Post';
import Pagination from '~/components/Pagination';

export default {
  components: {
    Post,
    Pagination,
  },
  data: () => {
    return {
      currentPage: 0,
    };
  },
  computed: {
    currentPosts: function () {
      const startIndex = this.currentPage * 5;
      return this.posts.slice(startIndex, startIndex + 5);
    },
    ...mapGetters(['posts']),
  },
  methods: {
    pageChanged(value) {
      this.currentPage = value;
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
