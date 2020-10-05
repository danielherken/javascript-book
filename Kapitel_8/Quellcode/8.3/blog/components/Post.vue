<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>
            {{ post.title }}
        </h2>
      </div>
    </div>
    <div class="row">
      <div v-if="!shortened" class="col-12">
        <p>
          {{ post.body }}
        </p>
      </div>
      <Author />
    </div>
  </div>
</template>

<script>
import Author from '~/components/Author'

export default {
  name: 'Post',
  components: {
    Author
  },
  props: {
    post: {
      type: Object,
      required: true
    },
    shortened: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
</style>
