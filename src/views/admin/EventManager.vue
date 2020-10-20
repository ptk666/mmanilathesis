<template>
    <div>
        <v-app-bar>
        <v-toolbar-title
            class="font-weight-light"
        >
            <span
              class="font-weight-bold"
            >
                MURDER
            </span> MANILA
        </v-toolbar-title>
      </v-app-bar>

        <BookingTable />
        <v-divider
            class="my-10"
        ></v-divider>
        <BookValidationTable
            class="my-10"
         />
    </div>
</template>

<script>
import BookingTable from '@/components/BookingTable.vue'
import BookValidationTable from '@/components/BookValidationTable.vue'
export default {
    components: {
        BookingTable,
        BookValidationTable
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>

</style>