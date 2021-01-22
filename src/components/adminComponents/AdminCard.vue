<template>
  <div>
    <v-card
      elevation="3"
    >
    <v-container>
      <v-row>        
        <v-col
          cols="4" md="4" sm="12"
        >
          <v-card
            class=""
            flat
          >
            <v-card-title
              class="font-weight-light"
            >
              <v-icon   
                large
                class="mr-2"           
              >mdi-book</v-icon>
              Reservation               
            </v-card-title>
            <v-card-text
              class="font-weight-bold ml-10 display-2 black--text"
                    
            >
              {{ count.reservationCount }}
            </v-card-text>
            <!-- <v-card-actions
              class="d-flex justify-end"
            >
              <v-btn
                text       
                @click="reservation"       
              >
                Update Now
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
        <v-col
          cols="4" md="4" sm="12"
        >
          <v-card
            flat
          >
            <v-card-title
               class="font-weight-light"
            >
              <v-icon   
                large
                class="mr-2"           
              >mdi-delete</v-icon>
              Cancelled & Expired Reservation               
            </v-card-title>
            <v-card-text
              class="font-weight-bold ml-10 display-2 black--text"
                    
            >
              {{ count.cancelledReservationCount + count.expiredReservationCount }}
            </v-card-text>
            <!-- <v-card-actions
              class="d-flex justify-end"
            >
              <v-btn
                text
                @click="cancelledReservation"            
              >
                Update Now
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col><v-col
          cols="4" md="4" sm="12"
        >
          <v-card
            flat
          >
            <v-card-title
               class="font-weight-light"
            >
              <v-icon   
                large
                class="mr-2"           
              >mdi-check</v-icon>
              Confirmed Reservation               
            </v-card-title>
            <v-card-text
              class="font-weight-bold ml-10 display-2 black--text"
                    
            >
              {{ count.confirmedReservationCount }}
            </v-card-text>
            <!-- <v-card-actions
              class="d-flex justify-end"
            >
              <v-btn
                text   
                @click="confirmedReservation"           
              >
                Update Now
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>      
    </v-container>
    <v-divider></v-divider>
      <v-card-actions
        align="center"
        class="d-flex justify-center"
        
      >
        <v-btn
          text
          @click="initialize"          
        >
          Update Now
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      count: {
        reservationCount: '',
        cancelledReservationCount: '',
        expiredReservationCount: '',
        confirmedReservationCount: ''
      },
      interval: ''
    }
  },
  methods: {
    initialize() {
      axios.get('http://murder-manila/api/Pendings')
        .then(res => {
          this.count.reservationCount = res.data.data.length;          
        })

      axios.get('http://murder-manila/api/CancelledBookings')
        .then(res => {
          this.count.cancelledReservationCount = res.data.data.length;
        })

      axios.get('http://murder-manila/api/expiredBookings')
        .then(res => {
          this.count.expiredReservationCount = res.data.data.length;
        })

      axios.get('http://murder-manila/api/Booked')
        .then(res => {
          this.count.confirmedReservationCount = res.data.data.length;
        })
    },
    reservation() {
      axios.get('http://murder-manila/api/Pendings')
        .then(res => {
          this.count.reservationCount = res.data.data.length;  
          this.$forceUpdate();        
        })
    },
    cancelledReservation() {
      axios.get('http://murder-manila/api/CancelledBookings')
        .then(res => {
          this.count.cancelledReservationCount = res.data.data.length;
          this.$forceUpdate();
        })
    },
    confirmedReservation() {
      axios.get('http://murder-manila/api/Booked')
        .then(res => {
          this.count.confirmedReservationCount = res.data.data.length;
          this.$forceUpdate();
        })
    }
  },
  computed: {
    reserveCount() {
      return this.count.reservationCount;
    },
    cancelledReserveCount() {
      return this.count.cancelledReservationCount;
    },
    confirmedReserveCount() {
      return this.count.confirmedReservationCount;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.initialize();
    }, 60000);

    // setInterval(this.initialize(), 1000);
  },
  created() {
    this.initialize();
    
  }
}
</script>

<style>

</style>