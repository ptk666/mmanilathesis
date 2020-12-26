<template>
    <div id="app">
        <NavbarAdmin
            class="mb-5"
         />
        <BookingTable

         />
         <v-divider
            class="my-10"
         ></v-divider>
         <BookValidationTable />
         <v-divider
            class="my-10"
         ></v-divider>
        <EmployeesTable
            class="mb-10"
         />
    </div>
</template>

<script>
import BookingTable from '@/components/BookingTable.vue'
import EmployeesTable from '@/components/EmployeesTable.vue'
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import BookValidationTable from '@/components/BookValidationTable.vue'

export default {
    components: {
        BookingTable,
        EmployeesTable,
        NavbarAdmin,
        BookValidationTable
    },
    data() {
        return {

        }
    },
    methods: {

    },
    created() {

    },
}
</script>
    
<style scoped>

</style>