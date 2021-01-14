<template>
  <div>
    <v-carousel
      hide-delimiters
    >
      <v-carousel-item
        v-for="(img, i) in showImgs"
        :key="i"
        :src="img"
      >         
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'carousel',
  computed: {
    ...mapGetters(['showImgs'])
  }
}
</script>

<style>

</style>