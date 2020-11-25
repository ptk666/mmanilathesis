<template>
    <div>
        <v-app-bar
            
        >
          <v-app-bar-title
            id="title"
          >        
              DASHBOARD
          </v-app-bar-title>
          <v-spacer></v-spacer>
          <v-btn
            text
            router-link to="/owner"
          >
              Bookings
          </v-btn>
          |
          <v-btn
            text
          >
              Sales Report
          </v-btn>
          |
          <v-btn
            text
            router-link to="/registration"
          >
              Registration
          </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>