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
                    id: '0',
                    referenceNumber: 123091854,
                    bookDate: '10-20-2020',
                    bookTime: '1:00PM',
                    theme: 'Revenge at the Reunion',
                    maxpax: 20,
                    venue: 'Sta. Cruz'
                },
                {   
                    id: '1',
                    referenceNumber: 13452346,
                    bookDate: '10-24-2020',
                    bookTime: '3:00PM',
                    theme: 'Murder at the Mansion',
                    maxpax: 20,
                    venue: 'Pangasinan'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>