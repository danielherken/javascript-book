<template>
  <div>
    <Pagination :page="0" :items-count="30" :items-per-page="10" />
  </div>
</template>

<script>
import Pagination from '~/components/Pagination';

export default {
  components: {
    Pagination,
  },
  layout: 'test',
};
</script>
