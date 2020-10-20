<template>
    <div
        align="center"
    >
        <v-card
            width="1000"
        >
            <v-card-title>
                Booking Validation
            </v-card-title>
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="items"
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
                {
                    text: 'Mobile Number',
                    sortable: false,
                    value: 'number'
                },
                {
                    text: 'Email',
                    sortable: false,
                    value: 'email'
                },
                {
                    text: 'Date',
                    sortable: true,
                    value: 'date'
                },
                {
                    text: 'Time',
                    sortable: false,
                    value: 'time'
                }
            ],
            items: [
                {
                    id: '0',
                    number: '095849375',
                    email: 'test@gmail.com',
                    date: '12-19-2020',
                    time: '2:30pm'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>