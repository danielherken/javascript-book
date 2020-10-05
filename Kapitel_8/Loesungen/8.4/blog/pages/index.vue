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
        }
      ]
    }
  },
  methods: {
    pageChanged(value) {
      this.currentPage = value;
    },
    currentPosts() {
      const startIndex = this.currentPage * 5;
      return this.posts.slice(startIndex, startIndex + 5);
    }
  }
}
</script>
