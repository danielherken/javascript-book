<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>
          <nuxt-link :to="localePath(`/post/${post.id}`)">
            {{ post.title }}
          </nuxt-link>
        </h2>
      </div>
    </div>
    <div :class="['row', shortened ? 'short' : '']">
      <div v-if="!shortened" class="col-12">
        <p>
          {{ post.body }}
        </p>
      </div>
      <Author :user-id="post.userId" />
      <Comments v-if="!shortened" :post-id="post.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Author from '~/components/Author.vue';
import Comments from '~/components/Comments.vue';
import { PostModel } from '~/models/PostModel.ts';

@Component({
  components: {
    Author,
    Comments
  }
})
export default class Post extends Vue {
  @Prop({ required: true })
  private post!: PostModel;

  @Prop({ default: false })
  private shortened!: boolean;
}
</script>

<style scoped>
.short {
  margin-bottom: 25px;
}
</style>
