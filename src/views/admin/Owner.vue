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
    <v-divider
      class="my-10"
    ></v-divider>
    <EmployeesTable />
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

import NavbarAdmin from '@/components/adminComponents/NavbarAdmin'
import BookingTable from '@/components/adminComponents/BookingTable'
import BookValidationTable from '@/components/adminComponents/BookValidationTable'
import EmployeesTable from '@/components/adminComponents/EmployeesTable'
import BookedTable from '@/components/adminComponents/BookedTable'
import ExpiredTable from '@/components/adminComponents/ExpiredTable'
import AdminCard from '@/components/adminComponents/AdminCard'
import CalendarTable from '@/components/adminComponents/CalendarTable'
import DoneBookingsTable from '@/components/adminComponents/DoneBookingsTable'
export default {
  components: {
    NavbarAdmin,
    BookingTable,
    BookValidationTable,
    EmployeesTable,
    BookedTable,
    ExpiredTable,
    AdminCard,
    CalendarTable,
    DoneBookingsTable
  },
  data() {
    return {

    }
  },
  created() {
    // this.initialize();
  },
  methods: {
    // initialize() {
    //   axios.get('http://murder-manila/api/Pendings')
    //     .then(res => {
    //       this.reservationCount = res.data.data.length;          
    //     })

    //   axios.get('http://murder-manila/api/CancelledBookings')
    //     .then(res => {
    //       this.cancelledReservationCount = res.data.data.length;
    //     })

    //   axios.get('http://murder-manila/api/Booked')
    //     .then(res => {
    //       this.confirmedReservationCount = res.data.data.length;
    //     })
    // }
  }
}
</script>

<style>

</style>