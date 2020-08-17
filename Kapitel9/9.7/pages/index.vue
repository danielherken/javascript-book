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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MapGetter } from 'types-vue';
import Post from '~/components/Post.vue';
import Pagination from '~/components/Pagination.vue';
import { PostModel } from '~/models/PostModel.ts';

@Component({
  components: {
    Post,
    Pagination
  }
})
export default class index extends Vue {
  private currentPage: number = 0;

  @MapGetter()
  private posts!: [];

  private get currentPosts (): PostModel[] {
    const startIndex: number = this.currentPage * 5;
    return this.posts.slice(startIndex, startIndex + 5);
  }

  private pageChanged (value: number) {
    this.currentPage = value;
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
