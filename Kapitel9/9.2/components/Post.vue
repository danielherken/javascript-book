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

<script>
import Author from '~/components/Author';
import Comments from '~/components/Comments';

export default {
  name: 'Post',
  components: {
    Author,
    Comments,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    shortened: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.short {
  margin-bottom: 25px;
}
</style>
