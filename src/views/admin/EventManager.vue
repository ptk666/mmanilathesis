<template>
  <div>
    <NavbarAdmin />
    <AdminCard />
    <CalendarTable />
    <BookingTable />
    <v-divider
      class="my-10"
    ></v-divider>
    <BookedTable />
    <v-divider
      class="my-10"
    ></v-divider>
    <DoneBookingsTable />    
    <v-divider
      class="my-10"
    ></v-divider>
    <BookValidationTable />
    <v-divider
      class="my-10"
    ></v-divider>
    <ExpiredTable />
  </div>
</template>

<script>
import NavbarAdmin from '@/components/adminComponents/NavbarAdmin'
import BookingTable from '@/components/adminComponents/BookingTable'
import BookValidationTable from '@/components/adminComponents/BookValidationTable'
import AdminCard from '@/components/adminComponents/AdminCard'
import CalendarTable from '@/components/adminComponents/CalendarTable'
import BookedTable from '@/components/adminComponents/BookedTable'
import DoneBookingsTable from '@/components/adminComponents/DoneBookingsTable'
import ExpiredTable from '@/components/adminComponents/ExpiredTable'
export default {
  components: {
    NavbarAdmin,
    BookingTable,
    BookValidationTable,
    AdminCard,
    CalendarTable,
    BookedTable,
    DoneBookingsTable,
    ExpiredTable
  },

}
</script>

<style>

</style>