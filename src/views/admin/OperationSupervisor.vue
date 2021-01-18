<template>
  <div>
    <NavbarAdmin />
    <BookValidationTable 
      class="mt-10"
    />
  </div>
</template>

<script>
import NavbarAdmin from '@/components/adminComponents/NavbarAdmin'
import BookValidationTable from '@/components/adminComponents/BookValidationTable'
export default {
  components: {
    BookValidationTable,
    NavbarAdmin
  }
}
</script>

<style>

</style>