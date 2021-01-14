<template>
    <div>
      
        <v-toolbar
          color="white"
          light
        >
          <v-toolbar-title>
            DASHBOARD
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              text
            >
              Bookings    
            </v-btn>
            <v-btn
              text
            >
              Registration    
            </v-btn>
            <v-btn
              depressed
              color="error"
              @click="logout"
            >
              Log Out    
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
      logout() {
        this.$store.dispatch('logoutUser');
      }    
  }
}
</script>

<style scoped>

</style>