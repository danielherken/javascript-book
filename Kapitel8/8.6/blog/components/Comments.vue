<template>
  <div class="col-12">
    <h4>
      <b-icon icon="arrow-clockwise" @click="refresh" />
      {{ $t('comments') }}
    </h4>
    <ul>
      <li v-for="(comment, index) in comments" :key="index">
        <span>
          {{ comment.name }}
        </span>
        <b>
          {{ $t('says') }}
        </b>
        <p>
          {{ comment.body }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data: () => {
    return {
      comments: [
        { postId: 1, id: 1, name: 'Test Name', email: '123@test.de', body: 'Test comment body' },
        { postId: 1, id: 2, name: 'Test Name #2', email: '1234@test.de', body: 'Test comment body #2' },
        { postId: 1, id: 3, name: 'Test Name #3', email: '1235@test.de', body: 'Test comment body #3' }
      ]
    }
  },
  methods: {
    refresh() {
      this.comments.push({ postId: 1, id: 2, name: 'Test Name #4', email: '1234@test.de', body: 'Test comment body #4' })
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding-left: 0px;
  }
</style>
