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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Pagination extends Vue {
  @Prop({ required: true })
  private page!: number;

  @Prop({ required: true })
  private itemsCount!: number;

  @Prop({ required: true })
  private itemsPerPage!: number;
}
</script>

<style scoped></style>
