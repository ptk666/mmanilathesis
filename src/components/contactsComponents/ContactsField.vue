<template>
  <div>
    <v-form>
      <v-text-field
        label="First Name"
        outlined
        dense
        v-model="contactsData.fname"
        :error-messages="firstNameErrors"
        @change="$v.contactsData.fname.$touch()"
        @blur="$v.contactsData.fname.$touch()"
      ></v-text-field>
      <v-text-field
        label="Last Name"
        outlined
        dense
        v-model="contactsData.lname"
        :error-messages="lastNameErrors"
        @change="$v.contactsData.lname.$touch()"
        @blur="$v.contactsData.lname.$touch()"
      ></v-text-field>
      <v-text-field
        label="Contact #"
        outlined
        dense
        v-model="contactsData.contactNumber"
        :error-messages="contactNumberErrors"
        @change="$v.contactsData.contactNumber.$touch()"
        @blur="$v.contactsData.contactNumber.$touch()"
        placeholder="Format: 09123456789"
        counter="11"
        number
      ></v-text-field>
      <v-text-field
        label="Email"
        outlined
        dense
        v-model="contactsData.email"
        :error-messages="emailAddressErrors"
        @change="$v.contactsData.email.$touch()"
        @blur="$v.contactsData.email.$touch()"
      ></v-text-field>
      <v-btn
        class="mr-5"
        color="primary"
        @click="submit()"
      >
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { required, email, numeric } from 'vuelidate/lib/validators'
import moment from 'moment'
export default {
  data() {
    return {
      contactsData: {
        fname: '',
        lname: '',
        contactNumber: '',
        email: '',
        referenceNumber: ''
      }   
    }
  },
    validations: {
        contactsData: {
          fname: {
            required
          },
          lname: {
            required
          },
          contactNumber: {
            required,
            numeric
          },
          email: {
            required,
            email
          }
        }
    },
  methods: {
    submit() {
        if(this.contactsData.fname.length > 0 && this.contactsData.lname.length > 0 && this.contactsData.contactNumber.length == 11 && this.contactsData.email.length > 0) {
          this.$store.dispatch('storeContactsData', this.contactsData)
          this.$router.push('/form/contacts/summary');
          this.sweetAlert();
        }
        else {
          this.$v.$touch();
        }
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
    generateRef() {
      const date = new Date()
      const refDate = (date.toISOString().substr(0, 10).replaceAll('-', ''))
      const refTime = (date.toISOString().substr(11, 8).replaceAll(':', ''))
      const referenceNumber = refDate.concat(refTime)
      this.contactsData.referenceNumber = referenceNumber
    }
  },
  computed: {
   firstNameErrors() {
     const errors = []
     if(!this.$v.contactsData.fname.$dirty) return errors
     !this.$v.contactsData.fname.required && errors.push('First name is required.')
     return errors
   },
   lastNameErrors() {
     const errors = []
     if(!this.$v.contactsData.lname.$dirty) return errors
     !this.$v.contactsData.lname.required && errors.push('Last name is required.')
     return errors
   },
   contactNumberErrors() {
     const errors = []
     if(!this.$v.contactsData.contactNumber.$dirty) return errors
     !this.$v.contactsData.contactNumber.required && errors.push('Contact number is required.')
     !this.$v.contactsData.contactNumber.numeric && errors.push('It must be numeric.')
     return errors
   },
   emailAddressErrors() {
     const errors = []
     if(!this.$v.contactsData.email.$dirty) return errors
     !this.$v.contactsData.email.required && errors.push('Email is required.')
     !this.$v.contactsData.email.email && errors.push('It must be a valid email.')
     return errors
   },
  },
  created() {
    this.generateRef();
  }
}
</script>

<style scoped>
  .v-text-field {
    width: 50%;
  }
</style>