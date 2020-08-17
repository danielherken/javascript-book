<template>
  <div class="row">
    <div class="col text-center">
      <b-button :disabled="page === 0" @click="$emit('pageChanged', page - 1)">
        <<
      </b-button>
      <b-button :disabled="((page + 1) * itemsPerPage) >= itemsCount" @click="click">
        >>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    page: {
      type: Number,
      required: true
    },
    itemsCount: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    click() {
      this.$emit('pageChanged', this.page + 1);
    }
  }
}
</script>

<style scoped>

</style>
