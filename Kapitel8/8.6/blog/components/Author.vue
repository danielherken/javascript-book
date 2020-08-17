<template>
  <div class="col-12">
    <h5>
      {{ $t('createdBy') }} {{ author.name }}
    </h5>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data: () => {
    return {
      author: {
        id: 1,
        name: 'Leanne Graham'
      }
    }
  }
}
</script>

<style scoped>

</style>
