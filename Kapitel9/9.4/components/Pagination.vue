<template>
  <div class="row">
    <div class="col text-center">
      <b-button
        variant="primary"
        :disabled="page === 0"
        @click="$emit('pageChanged', page - 1)"
      >
        {{ $t('previous') }}
      </b-button>
      <b-button
        variant="primary"
        :disabled="(page + 1) * itemsPerPage >= itemsCount"
        @click="$emit('pageChanged', page + 1)"
      >
        {{ $t('next') }}
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
      required: true,
    },
    itemsCount: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
