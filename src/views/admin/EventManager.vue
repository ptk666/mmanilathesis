<template>
  <div>
    <NavbarAdmin />
    <BookingTable />
    <v-divider
      class="my-10"
    ></v-divider>
    <BookValidationTable 
      class="mb-10"
    />
  </div>
</template>

<script>
import NavbarAdmin from '@/components/adminComponents/NavbarAdmin'
import BookingTable from '@/components/adminComponents/BookingTable'
import BookValidationTable from '@/components/adminComponents/BookValidationTable'
export default {
  components: {
    NavbarAdmin,
    BookingTable,
    BookValidationTable,
  },

}
</script>

<style>

</style>