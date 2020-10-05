<template>
  <Post :post="post" />
</template>

<script>
import Post from '~/components/Post'

export default {
  components: {
    Post
  },
  data: () => {
    return {
      post: {
        userId: 1, 
        id: 1, 
        title: 'Test Post', 
        body: 'quia et suscipit suscipit'
      }
    }
  }
}
</script>

<style scoped>
</style>
