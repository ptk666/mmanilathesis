<template>
  <div
    align="center"
  >
    <v-card
      full-width
      class="mt-1 elevation-3"
    >
      <v-data-table
        :headers="headers"
        :items="datas"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title><em>Pending Bookings</em></v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                  v-show="false"
                >
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.id"
                          label="ID"
                          readonly
                          
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.Reference_Number"
                          label="Reference Number"
                          readonly
                          
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.Name"
                          label="Name"
                          readonly                          
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.date"
                          label="Book Date"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.time"
                          label="Book Time"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.game"
                          label="Theme"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.maxpax"
                          label="# of Persons"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.venue"
                          label="Venue"
                          readonly
                        ></v-text-field>                                             
                      </v-col>         
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <!-- <v-btn
                          medium
                          color="secondary"
                        >Partially Paid</v-btn>      -->
                      </v-col>
                      <v-col
                        cols="12" sm="6" md="4"
                        class="ml-5"
                      >                      
                        <!-- <v-btn
                          medium
                          color="primary"
                        >Fully Paid</v-btn> -->
                      </v-col>       
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    medium
                    color="primary"
                    @click="fullyPaid(); fullyPaidEmail()"
                  >Fully Paid</v-btn>
                  <v-btn
                          medium
                          color="secondary"
                          @click="partialPaid(); partialPaidEmail()"
                        >Partially Paid</v-btn>  
                        <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline justify-center"
                  >Reservation is cancelled?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm(); cancelBookingEmail();"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template
          #item.status="{ item }"
        >
          <v-btn
            x-small
            color="info"
            @click="booked(item)"
          >
            Pending
          </v-btn>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-check
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
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
          text: 'Name',
          value: 'Name',
          sortable: false
        },
        {
          text: 'Book Date',
          value: 'date',
          sortable: true
        },
        {
          text: 'Expiry Date',
          value: 'expiration_date',
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
          text: 'Status',
          value: 'status',
          sortable: false
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        }
      ],
      datas: [{
        id: '',
        Reference_Number:'',
        date: '',
        time: '',
        game: '',
        maxpax: '',
        venue: '',
        Name: '',
        email: '',
        Total_Amount: '',
        expiration_date: ''
      }],
      editedIndex: -1,
      editedItem: {
        id: '',
        Reference_Number:'',
        date: '',
        time: '',
        game: '',
        maxpax: '',
        venue: '',
        Name: '',
        email: '',
        Total_Amount: '',
        expiration_date: ''
      },
      defaultItem: {
        id: '',
        Reference_Number:'',
        date: '',
        time: '',
        game: '',
        maxpax: '',
        venue: '',
        Name: '',
        email: '',
        Total_Amount: '',
        expiration_date: ''
      },
      interval: ''
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ?  '' : ''
      },
      
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize();
      this.expiredBookings();
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('token');
    },

    methods: {
      initialize () {
        axios.get('http://35.225.91.92/api/Pendings', {
          
        })
          .then(res => {
            this.datas = res.data.data;
            
          })
      },
      // booked(item) {

      // },
      editItem (item) {
        this.editedIndex = this.datas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.datas.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.datas.splice(this.editedIndex, 1)
        this.closeDelete()

        axios.put(`http://35.225.91.92/api/editCancelBooking/${this.editedItem.id}`)
          .then(res => {
            this.$forceUpdate();
          })
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          
          axios.put(`http://35.225.91.92/api/editpending/${this.editedItem.id}`, {
            date: this.editedItem.date,
            time: this.editedItem.time,
            game: this.editedItem.game,
            maxpax: this.editedItem.maxpax,
            venue: this.editedItem.venue
          })
            .then(res => {
              console.log(res.data);
            })
          this.dialog = false
          this.$forceUpdate();
        } else {
          this.datas.push(this.editedItem)
        }
        this.datas.splice(this.editedIndex, 1)
      },
      partialPaidEmail() {
        axios.post(`http://35.225.91.92/api/initialPaymentEmail`, {
          email: this.editedItem.email,
          referenceNumber: this.editedItem.Reference_Number,
          name: this.editedItem.Name,
          downpayment: this.editedItem.Downpayment,
          date: this.editedItem.date,
          time: this.editedItem.time,
          theme: this.editedItem.game,
          maxpax: this.editedItem.maxpax,
          venue: this.editedItem.venue,
          contactNumber: this.e
        })
          .then(res => {
            console.log(res)
          })
      },
      partialPaid() {
        axios.put(`http://35.225.91.9235.225.91.92/api/editPartialPaid/${this.editedItem.id}`)
      },
      fullyPaid() {
        axios.put(`http://35.225.91.9235.225.91.92/api/editFullyPaid/${this.editedItem.id}`)
      },
      fullyPaidEmail() {
        axios.post(`http://35.225.91.9235.225.91.92/api/fullPaymentEmail`, {
          email: this.editedItem.email,
          referenceNumber: this.editedItem.Reference_Number,
          name: this.editedItem.Name,
          total_amount: this.editedItem.Total_Amount,
          date: this.editedItem.date,
          time: this.editedItem.time,
          theme: this.editedItem.game,
          maxpax: this.editedItem.maxpax,
          venue: this.editedItem.venue
        })
          .then(res => {
            console.log(res.data)
          })
      },
      cancelBookingEmail() {
        axios.post(`http://35.225.91.92/api/cancelBookingEmail`, {
          email: this.editedItem.email,
          referenceNumber: this.editedItem.Reference_Number,
          name: this.editedItem.Name,
          amount: this.editedItem.Total_Amount,
          date: this.editedItem.date,
          time: this.editedItem.time,
          theme: this.editedItem.game,
          maxpax: this.editedItem.maxpax,
          venue: this.editedItem.venue
        })
          .then(res => {
            console.log(res.data)
          })
      },
      expiredBookings() {
          axios.put(`http://35.225.91.92/api/expiredEmail`)
          .then(res => {
            // console.log(res)
          })          
      },
      intervalCall() {
        axios.put('http://35.225.91.92/api/doneEmail')
          .then(res => {
            
          })
      }
    },
    mounted() {
      this.interval = setInterval(() => {
        this.intervalCall();
        this.expiredBookings();
      }, 300000)
    }
    
  }
</script>