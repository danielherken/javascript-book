<template>
  <Post :post="posts.find((o) => o.id === Number($route.params.id))" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MapGetter } from 'types-vue';
import Post from '~/components/Post.vue';
import { PostModel } from '~/models/PostModel.ts';

@Component({
  components: {
    Post
  }
})
export default class _id extends Vue {
  @MapGetter() private posts!: PostModel[];
}
</script>

<style scoped></style>
