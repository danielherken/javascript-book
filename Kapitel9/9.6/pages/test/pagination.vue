<template>
  <div>
    <Pagination
      :page="Number($route.query.page)"
      :items-count="Number($route.query.count)"
      :items-per-page="Number($route.query.perpage)"
    />
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
