<template>
  <div class="col-12">
    <h4>
      {{ $t('comments') }}
    </h4>
    <b-button @click="refresh">
      {{ $t('refresh') }}
    </b-button>
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
      required: true,
    },
  },
  data: () => {
    return {
      comments: [],
    };
  },
  async mounted() {
    await this.refresh();
  },
  methods: {
    async refresh() {
      try {
        this.comments = await this.$axios.$get(
          `https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`
        );
      } catch (e) {
        console.error(e);
        this.comments = [];
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0px;
}
</style>
