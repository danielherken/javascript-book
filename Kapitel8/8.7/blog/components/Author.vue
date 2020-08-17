<template>
  <div class="col-12">
    <h5>
      Erstellt von: {{ getAuthor().name }}
    </h5>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Author',
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['allAuthors'])
  },
  methods: {
    getAuthor() {
      return this.allAuthors.find(o => o.id === this.userId);
    }
  }
}
</script>

<style scoped>

</style>
