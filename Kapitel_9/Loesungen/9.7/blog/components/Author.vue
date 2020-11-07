<template>
  <div class="col-12">
    <h5>
      {{ $t('createdBy') }}
      {{ users.find((o) => o.id === Number(userId)).name }}
    </h5>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MapGetter } from 'types-vue';
import { UserModel } from '~/models/UserModel.ts';

@Component
export default class Author extends Vue {
  @Prop({ required: true })
  private userId!: number;

  @MapGetter()
  private users!: UserModel[];
}
</script>
