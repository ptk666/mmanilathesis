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
              @click="bookings()"
            >
              Bookings    
            </v-btn>
            <v-btn
              text
              @click="registration()"
              v-if="user"
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
      user: window.localStorage.user_type
    }
  },
  methods: {
      logout() {
        this.$store.dispatch('logoutUser');
      },
      registration() {
        this.$router.push('/registration')
      },
      bookings() {
        this.$router.push('/owner')
      }
  },
  created() {

  }
}
</script>

<style scoped>

</style>