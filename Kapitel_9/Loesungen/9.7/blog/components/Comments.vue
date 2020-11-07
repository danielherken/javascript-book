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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CommentModel } from '~/models/CommentModel.ts';

@Component
export default class Comments extends Vue {
  @Prop({ required: true })
  private postId!: number;

  private comments: CommentModel[] = [];

  private async mounted () {
    await this.refresh();
  }

  private async refresh () {
    try {
      this.comments = await this.$axios.$get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`
      );
    } catch (e) {
      console.error(e);
      this.comments = [];
    }
  }
}
</script>
