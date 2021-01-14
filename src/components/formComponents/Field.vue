<template>
  <div>
    <v-form
      ref="form"
    >
      <v-menu
        top
        :close-on-content-click="false"
      >
        <template
          v-slot:activator="{on, attr}"
        >
          <v-text-field
            label="Time"
            v-bind="attr"
            v-on="on"
            :value="bookingData.time"
            :error-messages="timeErrors"
            @input="$v.bookingData.time.$touch()"
            @blur="$v.bookingData.time.$touch()"
            readonly
          >
          </v-text-field>
        </template>
        <v-time-picker
          v-model="bookingData.time"
          full-width
        ></v-time-picker>
      </v-menu>
      <v-menu
        top
        :close-on-content-click="false"
      >
        <template
          v-slot:activator="{on, attr}"
        >
          <v-text-field
            label="Date"
            v-bind="attr"
            v-on="on"
            :value="dateFormat"
            :error-messages="dateErrors"
            @input="$v.bookingData.date.$touch()"
            @blur="$v.bookingData.date.$touch()"
            readonly
          >
          </v-text-field>
        </template>
        <v-date-picker
          full-width
          v-model="bookingData.date"
          no-title
          :min="this.allowance"
        >
        </v-date-picker>
      </v-menu>

      <v-select
        :items="showThemes"
        label="Themes"
        item-text="name"
        item-value="id"
        v-model="bookingData.selectedTheme"
        :error-messages="themeErrors"
        @change="$v.bookingData.selectedTheme.$touch()"
        @blur="$v.bookingData.selectedTheme.$touch()"
      >
      </v-select>
      
      <v-text-field
        label="# of Players"
        :messages="['Minimum of 8, maximum of 60 persons.']"
        v-model="bookingData.persons"
        :error-messages="personErrors"
        @input="$v.bookingData.persons.$touch()"
        @blur="$v.bookingData.persons.$touch()"
      ></v-text-field>
      <span
       
      ></span>

      <v-text-field
        label="Venue"
        v-model="bookingData.address"
        :error-messages="venueErrors"
        @input="$v.bookingData.address.$touch()"
        @blur="$v.bookingData.address.$touch()"
      ></v-text-field>

      <v-btn
        class="mr-3"
        color="primary"
        @click="bookData()"
      >
        Submit
      </v-btn>

      <v-btn
        color="secondary"
        @click="clear"
      >
        Reset
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required, between, numeric } from 'vuelidate/lib/validators'
import moment from 'moment'
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
  data() {
    return {
      valid: false,
      bookingData: 
        {
          time: '',
          date: '',
          selectedTheme: '',
          persons: '',
          address: ''
        },             
        allowance: null,

    }
  },
  validations: {
    bookingData: {
      time: {
        required
      },
      date: {
        required
      },
      selectedTheme: {
        required
      },
      persons: {
        required,
        between: between(8, 60),
        numeric
      },
      address: {
        required    
      }
    }
  },
  methods: {
    ...mapActions(['fetchThemes']),
    bookData() {
      this.$v.$touch();

      if(this.bookingData.time.length > 0 && this.bookingData.date.length > 0 && this.bookingData.selectedTheme != null && this.bookingData.persons.length > 0 && this.bookingData.address.length > 0) {
        axios.post('http://murder-manila/api/Availability', {
          book_date: this.bookingData.date,
          book_time: this.bookingData.time
        })
          .then(res => {
            if(res.data.response) {
              Swal.fire({
                toast: true,
                position: 'top',
                timer: 10000,
                timerProgressBar: true,
                title: res.data.message,
                icon: 'error',
                showConfirmButton: false    
              })
            }
            else {
              this.$store.dispatch('storeData', this.bookingData) 
              this.$router.push('/form/contacts')     
              this.sweetAlert(); 

              
            }
          }) 
      }
    },
    clear() {
      this.$v.$reset();

      this.bookingData.time = null,
      this.bookingData.date = null,
      this.bookingData.selectedTheme = null,
      this.bookingData.persons = null,
      this.bookingData.address = null
    },
    checkDate() {
      const currentDate = new Date().toISOString().substr(0, 10)
      const allowanceDate = moment(currentDate).add(9, 'days')
      const finalAllowanceDate = allowanceDate._d.toISOString().substr(0, 10)
      return this.allowance = finalAllowanceDate
    },
    sweetAlert() {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })

      Toast.fire({
        icon:'success',
        title:'Successful!'
      })      
    },
    availabilityDate() {
      
    }
  },
  computed: {
    ...mapGetters(['showThemes', 'showSnackbars']),
    timeErrors() {
      const errors = []
      if(!this.$v.bookingData.time.$dirty) return errors
      !this.$v.bookingData.time.required && errors.push('Time is required.')
      return errors
    },
    dateErrors() {
      const errors = []
      if(!this.$v.bookingData.date.$dirty) return errors
      !this.$v.bookingData.date.required && errors.push('Date is required.')
      return errors
    },
    themeErrors() {
      const errors = []
      if(!this.$v.bookingData.selectedTheme.$dirty) return errors 
      !this.$v.bookingData.selectedTheme.required && errors.push('Theme is required.')
      return errors
    },
    personErrors() {
      const errors = []
      if(!this.$v.bookingData.persons.$dirty) return errors 
      !this.$v.bookingData.persons.required && errors.push('Number of person is required.')
      !this.$v.bookingData.persons.between && errors.push('Number of persons must be between 8 and 60.')
      !this.$v.bookingData.persons.numeric && errors.push('You have inputted a non-numeric characters.')
      return errors
    },
    venueErrors() {
      const errors = []
      if(!this.$v.bookingData.address.$dirty) return errors
      !this.$v.bookingData.persons.required && errors.push('Venue is required.')
      return errors
    },
    dateFormat() {
      return this.bookingData.date ? moment(this.bookingData.date).format('dddd, MMMM Do YYYY') : ''
    }
  }, 
  created() {
    this.fetchThemes();
    this.checkDate();
    // console.log(new Date().toISOString())
    
    
   
  },
}
</script>

<style scoped>
  .v-text-field {
    width: 50%;
  }
</style>