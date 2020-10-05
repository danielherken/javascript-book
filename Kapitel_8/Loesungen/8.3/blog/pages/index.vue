<template>
  <div>
    <Post v-for="(postEntry, index) in posts" :key="index" :post="postEntry" :shortened="true" />
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
  }
}
</script>
