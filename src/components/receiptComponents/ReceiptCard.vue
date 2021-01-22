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
          @click.once="sendReceiptEmail()"
        >
          Send receipt in email
        </v-btn>
      </v-card-actions>

    </v-card>
    <div
      align="center"
      class="mt-5"
    > 
      <a href="/">Back to Home</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'
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
      // const datas = {};
      // datas.fname = this.$store.state.form.contactsDatas[0].firstName;
      // datas.lname = this.$store.state.form.contactsDatas[0].lastName;
      // datas.contactNumber = this.$store.state.form.contactsDatas[0].contactNumber;
      // datas.theme = this.$store.state.form.bookingDatas[0].selectedTheme;
      // datas.date  = this.$store.state.form.bookingDatas[0].date;
      // datas.time  = this.$store.state.form.bookingDatas[0].time;
      // datas.maxpax  = this.$store.state.form.bookingDatas[0].persons;
      // datas.venue = this.$store.state.form.bookingDatas[0].address;
      // datas.downpayment = this.$store.state.form.receiptComputations.downpayment;
      // datas.amount  = this.$store.state.form.receiptComputations.totalAmountWithVAT;
      // datas.referenceNumber = '12345678910';

      // console.log(datas)
      const sendEmail = {};
      sendEmail.email = this.$store.state.form.contactsDatas[0].email;
      sendEmail.fname = this.$store.state.form.contactsDatas[0].fname;
      sendEmail.lname = this.$store.state.form.contactsDatas[0].lname;
      
      sendEmail.contactNumber = this.$store.state.form.contactsDatas[0].contactNumber;
      //sendEmail.themes = this.$store.state.form.bookingDatas[0].themes.toString();
      sendEmail.date = this.$store.state.form.bookingDatas[0].date;
      sendEmail.time = this.$store.state.form.bookingDatas[0].time;
      sendEmail.maxpax = this.$store.state.form.bookingDatas[0].maxpax;
      sendEmail.venue = this.$store.state.form.bookingDatas[0].venue;
      sendEmail.downpayment = this.$store.state.form.receiptComputations.downpayment;
      sendEmail.referenceNumber = this.$store.state.form.contactsDatas[0].referenceNumber;
      sendEmail.amount = this.$store.state.form.receiptComputations.totalAmountWithVAT;
      
      
      // console.log(sendEmail)      
      axios.post('http://35.225.91.92/api/sendEmailBillling', sendEmail)
      //   fname: this.$store.state.form.contactsDatas[0].fname,
      //   lname: this.$store.state.form.contactsDatas[0].lname,      
      //   contactNumber: this.$store.state.form.contactsDatas[0].contactNumber,
      //   themes: this.$store.state.form.bookingDatas[0].themes,
      //   date: this.$store.state.form.bookingDatas[0].date,
      //   time: this.$store.state.form.bookingDatas[0].time,
      //   maxpax: this.$store.state.form.bookingDatas[0].maxpax,
      //   venue: this.$store.state.form.bookingDatas[0].venue,
      //   downpayment: this.$store.state.form.receiptComputations.downpayment,
      //   amount: this.$store.state.form.receiptComputations.totalAmountWithVAT,
      //   email: this.$store.tate.form.contactsDatas[0].email,        
      // })        
      .then(res => {
        Swal.fire({
          toast: true,
          position: 'top-left',
          showConfirmButton: false,
          timer: 10000,
          timerProgressBar: true,
          icon: 'success',
          title: 'We have sent you a receipt details in your email.'
        })
        console.log(res.data)
      })      
    }
  },
  created() {
    this.computation();
    this.downpayment = (this.$store.state.form.receiptComputations.downpayment).toLocaleString();
    this.total = (this.$store.state.form.receiptComputations.totalAmountWithVAT).toLocaleString();
    console.log(this.$store.state.form.contactsDatas[0].email)
  },
  mounted() {
  }
}
</script>

<style>

</style>