<template>
  <v-footer
    color="white lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="icon in icons"
        :key="icon"
        text
        rounded
        class="my-2"
        color="black"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
      <v-col
        class="white lighten-2 py-4 text-center black--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Group 1</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-instagram'
            ]
        }
    }    
}
</script>

<style scoped>

</style>