<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h2>
          Beispiel Titel
        </h2>
      </div>
    </div>
    <div class="row short">
      <Author />
    </div>
  </div>
</template>

<script>
import Author from '~/components/Author'

export default {
  name: 'Post',
  components: {
    Author
  }
}
</script>

<style scoped>
  .short {
    margin-bottom: 25px;
  }
</style>
