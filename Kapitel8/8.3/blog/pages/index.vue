<template>
  <div>
    <Post v-for="(post, index) in posts" :key="index" :post="post" :shortened="true" />
  </div>
</template>

<script>
import Post from '~/components/Post'

export default {
  components: {
    Post
  },
  data: () => {
    return {
      posts: [
        { userId: 1, id: 1, title: 'Test Post', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
        { userId: 1, id: 2, title: 'Test Post #2', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' }
      ]
    }
  }
}
</script>
