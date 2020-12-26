<template>
    <div
        align="center"
    >
        <v-card 
            width="1000"
            class="mt-5"
        >
        <v-card-title>
            Bookings
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-data-table
            :headers="headers"
            :items="data"
            :items-per-page="5"
        >
        </v-data-table>
        </v-card-text>
        
        </v-card>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            headers: [
                {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id'
                },
                {text: 'Reference Number', value: 'referenceNumber', sortable: false},
                {text: 'Book Date', value: 'bookDate', sortable: true},
                {text: 'Book Time', value: 'bookTime'},
                {text: 'Theme', value: 'theme'},
                {text: 'Persons', value:'maxpax'},
                {text: 'Venue', value: 'venue'}
            ],
            data: [
                {

                }
            ]
        }
    },
    methods: {
        datas() {
            axios.get('http://murder-manila/api/Booked/')
            .then(res => {
                console.log(res)
            });
        }
    },
    mounted() {
        this.datas();
    }
}
</script>

<style scoped>

</style>