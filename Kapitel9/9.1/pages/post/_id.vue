<template>
  <Post :post="posts.find((o) => o.id === Number($route.params.id))" />
</template>

<script>
import { mapGetters } from 'vuex';
import Post from '~/components/Post';

export default {
  components: {
    Post,
  },
  computed: {
    ...mapGetters(['posts']),
  },
};
</script>

<style scoped></style>
