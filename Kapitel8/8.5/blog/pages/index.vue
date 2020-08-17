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
        { userId: 1, id: 1, title: 'Test Post', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { userId: 1, id: 2, title: 'Test Post #2', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { userId: 1, id: 3, title: 'Test Post #3', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { userId: 1, id: 4, title: 'Test Post #4', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { userId: 1, id: 5, title: 'Test Post #5', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { userId: 1, id: 6, title: 'Test Post #6', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { userId: 1, id: 7, title: 'Test Post #7', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { userId: 1, id: 8, title: 'Test Post #8', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { userId: 1, id: 9, title: 'Test Post #9', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { userId: 1, id: 10, title: 'Test Post #10', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' }
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
