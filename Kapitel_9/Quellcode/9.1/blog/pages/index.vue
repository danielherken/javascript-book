<template>
  <div>
    <Post
      v-for="(post, index) in currentPosts()"
      :key="index"
      :post="post"
      :shortened="true"
    />
    <Pagination
      :page="currentPage"
      :items-count="allPosts.length"
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
  computed: {
    ...mapGetters(['allPosts']),
  },
  data: () => {
    return {
      currentPage: 0,
    };
  },
  watch: {
    $route(to, from) {
      this.switchPage();
    },
  },
  created() {
    this.$store.dispatch('loadInitialData');
    this.switchPage();
  },
  methods: {
    pageChanged(value) {
      this.$router.push({ path: this.$route.path, query: { page: value + 1 } });
    },
    switchPage() {
      if (this.$route.query.page) {
        this.currentPage = Number(this.$route.query.page - 1);
      } else {
        this.currentPage = 0;
      }
    },
    currentPosts() {
      const startIndex = this.currentPage * 5;
      return this.allPosts.slice(startIndex, startIndex + 5);
    },
  },
};
</script>
