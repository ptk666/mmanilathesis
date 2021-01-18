<template>
  <div>
    <NavbarAdmin />
    
    <BookingTable />
    <v-divider
      class="my-10"
    ></v-divider>
    <BookedTable />
    <v-divider
      class="my-10"
    ></v-divider>
    <BookValidationTable />
    <v-divider
      class="my-10"
    ></v-divider>
    <EmployeesTable />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarAdmin from '@/components/adminComponents/NavbarAdmin'
import BookingTable from '@/components/adminComponents/BookingTable'
import BookValidationTable from '@/components/adminComponents/BookValidationTable'
import EmployeesTable from '@/components/adminComponents/EmployeesTable'
import BookedTable from '@/components/adminComponents/BookedTable'
export default {
  components: {
    NavbarAdmin,
    BookingTable,
    BookValidationTable,
    EmployeesTable,
    BookedTable
  },
  data() {
    return {

    }
  },
  created() {
    
  }
}
</script>

<style>

</style>