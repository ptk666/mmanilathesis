<template>
  <div>
    <v-card
      outlined
      width="500"
      height="350"
      align="center"
    >
      <v-card-title
        class="text-uppercase font-weight-light"
      >
        <em>Receipt</em>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-text-field
          prefix="PHP"
          label="Reservation Fee"
          placeholder="Placeholder"
          readonly
          v-model="downpayment"
        ></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <v-text-field
          readonly
          label="Total"
          placeholder="Placeholder"
          prefix="PHP"
          v-model="total"
        ></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions
        class="justify-center py-5"
      >
        <v-btn
          color="success"
          dark
          medium
          @click="sendReceiptEmail()"
        >
          Send receipt in email
        </v-btn>
      </v-card-actions>

    </v-card>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      downpayment: '',
      total: ''
    }
  },
  methods: {
    ...mapActions(['computation']),
    sendReceiptEmail() {
      const datas = {};
      datas.fname = this.$store.state.form.contactsDatas[0].firstName;
      datas.lname = this.$store.state.form.contactsDatas[0].lastName;
      datas.contactNumber = this.$store.state.form.contactsDatas[0].contactNumber;
      datas.theme = this.$store.state.form.bookingDatas[0].selectedTheme;
      datas.date  = this.$store.state.form.bookingDatas[0].date;
      datas.time  = this.$store.state.form.bookingDatas[0].time;
      datas.maxpax  = this.$store.state.form.bookingDatas[0].persons;
      datas.venue = this.$store.state.form.bookingDatas[0].address;
      datas.downpayment = this.$store.state.form.receiptComputations.downpayment;
      datas.amount  = this.$store.state.form.receiptComputations.totalAmountWithVAT;
      datas.referenceNumber = '12345678910';

      console.log(datas)
      // axios.post('http://murder-manila/api/sendEmailBillling', datas)
      // .then(res => {
      //   console.log(res.data)
      // })
      
    }
  },
  created() {
    this.computation();
    this.downpayment = (this.$store.state.form.receiptComputations.downpayment).toLocaleString();
    this.total = (this.$store.state.form.receiptComputations.totalAmountWithVAT).toLocaleString();
  },
}
</script>

<style>

</style>