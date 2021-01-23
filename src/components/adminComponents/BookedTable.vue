<template>
  <div
    align="center"
  >
    <v-card
      width="1000"
    >
      <v-card-title>
        <em>Successful Bookings</em>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="datas"
        class="mt-5 elevation-3"
      >
      <!-- eslint-disable -->
       <template    
       
          #item.paid="{ item }"
        >
          {{ datas.is_initial_paid }}
         
        </template>
      </v-data-table>
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
          value: 'Reference_Number',
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
          value: 'game',
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
        {
          text: 'Paid',
          value: 'is_initial_paid',
          sortable: false
        },
      ],
      datas: [{
        id: '',
        Reference_Number: '',
        date: '',
        time: '',
        game: '',
        maxpax: '',
        venue: '',
        name : '',
        is_initial_paid: ''
      }]
    }
  },
  methods: {
    initialize() {
      this.getBookings();
    },
    getBookings() {
    axios.get('http://35.225.91.92/api/Booked')
      .then(res => {
        this.datas = res.data.data;        
      })        
    },
    
  },
  computed: {

  },
  created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('token');
    this.getBookings();    
  },
}
</script>

<style>

</style>