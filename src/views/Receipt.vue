<template>
  <div>
    <v-container>
      <v-row
        column
      >
        <v-col
          cols="12"
          class="d-flex justify-space-between"
        >
          <ReceiptSummary />
          <ReceiptCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ReceiptSummary from '@/components/receiptComponents/ReceiptSummary'
import ReceiptCard from '@/components/receiptComponents/ReceiptCard'
export default {
  components: {
    ReceiptSummary,
    ReceiptCard
  }
}
</script>

<style>

</style>