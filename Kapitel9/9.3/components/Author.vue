<template>
  <div class="col-12">
    <h5>
      {{ $t('createdBy') }}
      {{ users.find((o) => o.id === Number(userId)).name }}
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
      required: true,
    },
  },
  computed: {
    ...mapGetters(['users']),
  },
};
</script>

<style scoped></style>
