<template>
  <v-app>
    <v-main
      class="pa-0"
    >
      <router-view></router-view>
    </v-main>
  </v-app>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',

  components: {
    
  },
  computed: {
    ...mapState(['snackbars'])
  },
  data: () => ({
    //
  }),
};
</script>
