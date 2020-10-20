<template>
    <nav>
        <v-app-bar
         app
         flat
         light 
         color="white"
        >            
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-bold">Murder</span> <span class="font-weight-light">Manila</span>     
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down" v-for="link in links" :key="link.id" >
                <v-btn text router-link :to="link.route">{{ link.buttons }}</v-btn>
            </v-toolbar-items>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="side = !side"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer 
            app
            v-model="side" 
            right
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    active-class="black--text"
                >
                    <v-list-item v-for="link in links" :key="link.id" router-link :to="link.route" class="text-uppercase">
                        <v-list-item-title>{{ link.buttons }}</v-list-item-title>        
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
                side: false,
                xs: 200,
                links: [
                    {buttons: 'Home', route: '/'},
                    {buttons: 'About'},
                    {buttons: 'Themes'},
                    {buttons: 'Book Now', route: '/form'}
                ]
               }
            },
    computed: {

    },
    methods: {

    }
}
</script>

<style scoped>

</style>