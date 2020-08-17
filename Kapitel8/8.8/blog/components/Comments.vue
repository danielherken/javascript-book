<template>
  <div class="col-12">
    <h4>
      <b-icon icon="arrow-clockwise" @click="refresh" />
      {{ $t('comments') }}
    </h4>
    <ul>
      <li v-for="(comment, index) in allComments[postId]" :key="index">
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
import { mapGetters } from 'vuex';

export default {
  name: 'Comments',
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['allComments'])
  },
  async created() {
    await this.refresh()
  },
  methods: {
    async refresh() {
      if (!this.allComments[this.postId]) {
        try {
          const result = await this.$axios.get('https://jsonplaceholder.typicode.com/comments', { params: { postId: this.postId } });
          this.$store.commit('addComments', { postId: this.postId, comments: result.data });
        } catch (e) {
          console.error(e);
        }
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
