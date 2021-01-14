<template>
  <div>
    <v-card      
      flat
    >
      <v-card
        flat
        width="250"
      >
        <v-card-title
          class="text-uppercase font-weight-light"
        >
          <em>Booking Details</em>
        </v-card-title>
        <v-card-text>
          <v-text-field
            regular
            label="First Name"
            placeholder="Placeholder"
            readonly
            dense
            v-model="fname"
          ></v-text-field>
          <v-text-field
            regular
            label="Last Name"
            placeholder="Placeholder"
            readonly
            dense
            v-model="lname"
          ></v-text-field>
          <v-text-field
            regular
            label="Contact #"
            placeholder="Placeholder"
            readonly
            dense
            v-model="contactNumber"
          ></v-text-field>
          <v-text-field
            regular
            label="Email"
            placeholder="Placeholder"
            readonly
            dense
            v-model="email"
          ></v-text-field>
          <v-text-field
            regular
            label="Time"
            placeholder="Placeholder"
            readonly
            dense
            v-model="time"
          ></v-text-field>
          <v-text-field
            regular
            label="Date"
            placeholder="Placeholder"
            readonly
            dense
            v-model="date"
          ></v-text-field>
          <v-text-field
            regular
            label="Theme"
            placeholder="Placeholder"
            readonly
            dense
            v-model="stringTheme"
          ></v-text-field>
          <v-text-field
            regular
            label="# of Players"
            placeholder="Placeholder"
            readonly
            dense
            v-model="maxpax"
          ></v-text-field>
          <v-text-field
            regular
            label="Venue"
            placeholder="Placeholder"
            readonly
            dense
            v-model="venue"
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      fname: '',
      lname: '',
      contactNumber: '',
      email: '',
      time: '',
      date: '',
      theme: '',
      stringTheme: '',
      maxpax: '',
      venue: ''
    }
  },
  created() {
    // this.fname = this.$store.state.form.contactsDatas[0].firstName;
    // this.lname = this.$store.state.form.contactsDatas[0].lastName;
    // this.contactNumber = this.$store.state.form.contactsDatas[0].contactNumber;
    // this.email = this.$store.state.form.contactsDatas[0].emailAddress;
    // this.time = this.$store.state.form.bookingDatas[0].time;
    // this.date = this.$store.state.form.bookingDatas[0].date;
    // this.theme = this.$store.state.form.bookingDatas[0].selectedTheme;
    // this.maxpax = this.$store.state.form.bookingDatas[0].persons;
    // this.venue = this.$store.state.form.bookingDatas[0].address; 

    this.getThemesString();
    this.getBookings();
  },
  methods: {
    getThemesString() {
      axios.get('http://murder-manila/api/themes')
      .then(res => {
        if(this.$store.state.form.bookingDatas[0].selectedTheme == 1) {
          this.stringTheme = res.data.data[0].name;
        }
        else {
          this.stringTheme = res.data.data[1].name;
        }
      })
    },
    getBookings() {
      axios.get('http:murder-manila/api/reciept')
      .then(res => {
        console.log(res.data)
      })
    }
  },
  computed: {
    
  }
}
</script>

<style>

</style>