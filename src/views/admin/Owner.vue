<template>
  <div>
    <NavbarAdmin />
    <BookingTable />
    <v-divider
      class="my-10"
    ></v-divider>
    <BookValidationTable />
    <v-divider
      class="my-10"
    ></v-divider>
    <EmployeesTable />
  </div>
</template>

<script>
import NavbarAdmin from '@/components/adminComponents/NavbarAdmin'
import BookingTable from '@/components/adminComponents/BookingTable'
import BookValidationTable from '@/components/adminComponents/BookValidationTable'
import EmployeesTable from '@/components/adminComponents/EmployeesTable'
import axios from 'axios'
export default {
  components: {
    NavbarAdmin,
    BookingTable,
    BookValidationTable,
    EmployeesTable
  },
  data() {
    return {

    }
  },
  created() {
    axios.default.headers.common["Authorization"] = localStorage.getItem('token')
  }
}
</script>

<style>

</style>