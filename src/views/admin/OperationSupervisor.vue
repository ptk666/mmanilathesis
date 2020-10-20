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
    <BookingTable 
        class="my-10"
    />
    </div>
</template>

<script>
import BookingTable from '@/components/BookingTable.vue'
export default {
    components: {
        BookingTable
    }
}
</script>

<style scoped>

</style>