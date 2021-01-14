<template>
  <div>
    <v-form>
      <v-text-field
        label="First Name"
        outlined
        dense
        v-model="contactsData.firstName"
        :error-messages="firstNameErrors"
        @change="$v.contactsData.firstName.$touch()"
        @blur="$v.contactsData.firstName.$touch()"
      ></v-text-field>
      <v-text-field
        label="Last Name"
        outlined
        dense
        v-model="contactsData.lastName"
        :error-messages="lastNameErrors"
        @change="$v.contactsData.lastName.$touch()"
        @blur="$v.contactsData.lastName.$touch()"
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
      ></v-text-field>
      <v-text-field
        label="Email"
        outlined
        dense
        v-model="contactsData.emailAddress"
        :error-messages="emailAddressErrors"
        @change="$v.contactsData.emailAddress.$touch()"
        @blur="$v.contactsData.emailAddress.$touch()"
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
export default {
  data() {
    return {
      contactsData: {
        firstName: '',
        lastName: '',
        contactNumber: '',
        emailAddress: '',
      }   
    }
  },
    validations: {
        contactsData: {
          firstName: {
            required
          },
          lastName: {
            required
          },
          contactNumber: {
            required,
            numeric
          },
          emailAddress: {
            required,
            email
          }
        }
    },
  methods: {
    submit() {
        
        if(this.contactsData.firstName.length > 0 && this.contactsData.lastName.length > 0 && this.contactsData.contactNumber.length <= 11 && this.contactsData.emailAddress.length > 0) {
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
    }
  },
  computed: {
   firstNameErrors() {
     const errors = []
     if(!this.$v.contactsData.firstName.$dirty) return errors
     !this.$v.contactsData.firstName.required && errors.push('First name is required.')
     return errors
   },
   lastNameErrors() {
     const errors = []
     if(!this.$v.contactsData.lastName.$dirty) return errors
     !this.$v.contactsData.lastName.required && errors.push('Last name is required.')
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
     if(!this.$v.contactsData.emailAddress.$dirty) return errors
     !this.$v.contactsData.emailAddress.required && errors.push('Email is required.')
     !this.$v.contactsData.emailAddress.email && errors.push('It must be a valid email.')
     return errors
   },
  }
}
</script>

<style scoped>
  .v-text-field {
    width: 50%;
  }
</style>