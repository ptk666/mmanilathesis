<template>
    <div
        align="center"
    >
        <v-card
            width="1000"
            class="elevation-3"
        >
            <v-card-title>
                Booking Validation
            </v-card-title>
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="items"
                >
                <template
        v-slot:item.actions="{ item }"
      >
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small       
          @click="deleteItem(item)"   
        >
          mdi-delete
        </v-icon>
      </template>
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
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false
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