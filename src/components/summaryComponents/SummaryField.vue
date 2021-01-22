<template>
  <div
    align="center"
  >
    <v-container>
      <v-row
        column
      >
        <v-col
          cols="6"
        >
          <v-form>                   
            <v-text-field
              label="First Name"
              readonly
              v-model="contactsData.fname"
            >
            </v-text-field>
            <v-text-field
              label="Last Name"
              readonly
              v-model="contactsData.lname"
            ></v-text-field>
            <v-text-field
              label="Contact #"
              readonly
              v-model="contactsData.contactNumber"
            ></v-text-field>
            <v-text-field
              label="Email"
              readonly
              v-model="contactsData.email"
            ></v-text-field>
            <v-dialog
              v-model="dialog"
              width="600"
            >
              <template
                v-slot:activator="{on, attrs}"
              >
                <v-btn
                  color="success"
                  class="mt-3"
                  v-bind="attrs"
                  v-on="on"
                  @click.once="btnSnackbar.show = true; sendVerificationCode(); getVerificationCode()"
                >
                  Send verification code
                </v-btn>
              </template>


              <v-card
                align="center"
                class="justify-center"
              >
                <v-card-title
                  class="pb-0"
                >
                  <v-text-field
                    outlined
                    label="Verification Code"
                    class="pt-4"
                    v-model="verificationNumber"
                  ></v-text-field>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-title
                  class="text-uppercase justify-center font-weight-bold"
                >
                  Terms & Agreements
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur accusamus tempore quod nostrum fuga, tempora excepturi rem expedita recusandae eveniet in assumenda! Consequuntur veritatis repellendus at laudantium, vitae, autem voluptate numquam exercitationem mollitia nam similique maiores culpa accusantium totam nemo eaque accusamus quidem. Modi odio pariatur dignissimos impedit. Consectetur, iure.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions
                  class="justify-center"
                >
                  <v-btn
                    text
                    @click="verifyVerificationCode(); sendSummaryData()"
                  >
                    I Agree
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-form>
        </v-col>
        <v-col
          cols="6"
        >
          <v-text-field
            label="Time"
            readonly
            v-model="bookingData.time"
          ></v-text-field>
          <v-text-field
            label="Date"
            readonly
            v-model="bookingData.date"
          ></v-text-field>
          <v-text-field
            label="Theme"
            readonly
            v-model="bookingData.themes"
          ></v-text-field>
          <v-text-field
            label="# of Players"
            readonly
            v-model="bookingData.maxpax"
          ></v-text-field>
          <v-text-field
            label="Venue"
            readonly
            v-model="bookingData.venue"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      dialog: false,
      btnSnackbar: {
        show: false,
        timeout: 5000,
        text: 'We have sent you a verification code, please check your email.'
      },
      verificationNumber: null,
      contactsData: {
        fname: '',
        lname: '',
        contactNumber: '',
        email: ''
      },
      bookingData: {
        time: '',
        date: '',
        themes: '',
        maxpax: '',
        venue: ''
      }
    }
  },
  computed: {
    ...mapGetters[(
      'showBookingDatas',
      'showContactsDatas'
    )]
  },
  created() {
    this.contactsData.fname = this.$store.state.form.contactsDatas[0].fname;
    this.contactsData.lname = this.$store.state.form.contactsDatas[0].lname;
    this.contactsData.contactNumber = this.$store.state.form.contactsDatas[0].contactNumber;
    this.contactsData.email = this.$store.state.form.contactsDatas[0].email;
    this.bookingData.time = this.$store.state.form.bookingDatas[0].time;
    this.bookingData.date = this.$store.state.form.bookingDatas[0].date;
    this.bookingData.themes = this.$store.state.form.bookingDatas[0].themes;
    this.bookingData.maxpax = this.$store.state.form.bookingDatas[0].maxpax;
    this.bookingData.venue = this.$store.state.form.bookingDatas[0].venue;

    this.getThemesString();
    // this.generateRef();
  },
  updated() {
   
  },
  methods: {
    sendVerificationCode() {
      axios.post('http://35.225.91.92/api/generateCode')
      .then(res => {
        console.log(res.data.response);
        Swal.fire({
          toast: true,
          position: 'top',
          title: res.data.message,
          icon: 'success',
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false
        })
      })
    },
    verifyVerificationCode() {
      const payloadverification = {};
      payloadverification.verificationCode = this.verificationNumber;
      axios.post('http://35.225.91.92/api/codes', payloadverification)
      .then(res => {
        if(res.data.response) {
          Swal.fire({
            title: res.data.message,
            icon: 'success',
            toast: true,
            timer: 3000,
            timerProgressBar: true,
            position: 'top-end',
            showConfirmButton: false
          })
          this.$router.push('/form/contacts/summary/receipt')
        }
        else {
          Swal.fire({
            title: res.data.message,
            icon: 'error',
            toast: true,
            timer: 3000,
            timerProgressBar: true,
            color: 'error',
            position: 'top-end',
            showConfirmButton: false
          })
        }
      })
    },
    sendSummaryData() {
      const summaryData = {};
      summaryData.book_date = this.bookingData.date;
      summaryData.book_time = this.bookingData.time;
      summaryData.theme_id  = this.$store.state.form.bookingDatas[0].themes;
      summaryData.maxpax    = this.bookingData.maxpax;
      summaryData.venue     = this.bookingData.venue;
      summaryData.fname     = this.contactsData.fname;
      summaryData.lname     = this.contactsData.lname;
      summaryData.mobile_number = Number(this.contactsData.contactNumber);
      summaryData.email     = this.contactsData.email;
      summaryData.reference_number = this.$store.state.form.contactsDatas[0].referenceNumber;
      
      axios.post('http://35.225.91.92/api/booking', summaryData)
      .then(res => {
        console.log(res.data.response);
      })
    },
    getThemesString() {
      axios.get('http://35.225.91.92/api/themes')
      .then(res => {
        if(this.bookingData.themes == 1) {
          this.bookingData.themes = res.data.data[0].name;
        }
        else {
          this.bookingData.themes = res.data.data[1].name;
        }
      })
    },
    // getVerificationCode() {
    //   axios.get('http://35.225.91.92/api/sendVerification') 
    //     .then(res => {
    //       console.log(res.data)
    //     })
    // },
      generateRef() {
      console.log(new Date())

    }
  },


}
</script>

<style scoped>
  .v-text-field {
    width: 50%;
  }
</style>