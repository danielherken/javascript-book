<template>
  <div class="col-12">
    <h4>
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
      comments: []
    }
  },
  async created() {
    await this.refresh()
  },
  methods: {
    async refresh() {
      try {
        const result = await this.$axios.get('https://jsonplaceholder.typicode.com/comments', { params: { postId: this.postId } });
        this.comments = result.data;
      } catch (e) {
        console.error(e);
        this.comments = [];
      }
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
