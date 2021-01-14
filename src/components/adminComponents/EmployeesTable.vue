<template>
    <div
        align="center"
    >
        <v-card
            width="1000"
        >
            <v-card-title>
                Employees
            </v-card-title>
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="employees"
                >
                </v-data-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            headers: [
                {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id'
                },
                {
                    text: 'Name',
                    sortable: false,
                    value: 'name'
                },
                {
                    text: 'Employee Status',
                    value: 'status',
                    sortable: true
                }
            ],
            employees: [
                {
                    id: 0,
                    name: 'James Dela Cruz',
                    status: 'Owner'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>