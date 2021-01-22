<template>
  <div
    align="center"
  >
    <v-card
      width="1000"
    >
      <v-card-title>
        <em>Expired Bookings</em>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="datas"
        class="mt-5 elevation-3"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: true,
          value: 'id' 
        },
        {
          text: 'Reference Number',
          value: 'reference_number',
          sortable: false
        },
        {
          text: 'Book Date',
          value: 'date',
          sortable: true
        },
        {
          text: 'Book Time',
          value: 'time',
          sortable: false
        },
        {
          text: 'Theme',
          value: 'theme',
          sortable: false
        },
        {
          text: 'Persons',
          value: 'maxpax',
          sortable: false
        },
        {
          text: 'Venue',
          value: 'venue',
          sortable: false
        },
      ],
      datas: [{
        id: '',
        reference_number: '',
        date: '',
        time: '',
        theme: '',
        maxpax: '',
        venue: ''
      }]
    }
  },
  methods: {
    initialize() {
      this.getBookings();
    },
    getBookings() {
      axios.get('http://35.225.91.92/api/expiredBookings')
        .then(res => {
          this.datas = res.data.data;
          // console.log(res.data)
        })
    }
  },
  created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('token');
    this.getBookings();
  }
}
</script>

<style>

</style>