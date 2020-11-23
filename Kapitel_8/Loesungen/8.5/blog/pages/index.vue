<template>
  <div>
    <Post v-for="(post, index) in currentPosts()" :key="index" :post="post" :shortened="true" />
    <Pagination :page="currentPage" :items-count="posts.length" :items-per-page="5" @pageChanged="pageChanged" />
  </div>
</template>

<script>
import Post from '~/components/Post'
import Pagination from '~/components/Pagination'

export default {
  components: {
    Post,
    Pagination
  },
  data: () => {
    return {
      currentPage: 0,
      posts: [
        { 
          userId: 1, 
          id: 1, 
          title: 'Test Post', 
          body: 'quia et suscipit suscipit recusandae' 
        },
        { 
          userId: 1, 
          id: 2, 
          title: 'Test Post #2', 
          body: 'quia et suscipit suscipit recusandae' 
        },
        { 
          userId: 1, 
          id: 3, 
          title: 'Test Post #3', 
          body: 'quia et suscipit suscipit recusandae' 
        },
        { 
          userId: 1, 
          id: 4, 
          title: 'Test Post #4', 
          body: 'quia et suscipit suscipit recusandae' 
        },
        { 
          userId: 1, 
          id: 5, 
          title: 'Test Post #5', 
          body: 'quia et suscipit suscipit recusandae' 
        },
        { 
          userId: 1, 
          id: 6, 
          title: 'Test Post #6', 
          body: 'quia et suscipit suscipit recusandae' 
        }                                
      ]
    }
  },
  created() {
    this.switchPage();
  },
  watch: {
    '$route' (to, from) {
      this.switchPage();
    }
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
      return this.posts.slice(startIndex, startIndex + 5);
    }
  }
}
</script>
