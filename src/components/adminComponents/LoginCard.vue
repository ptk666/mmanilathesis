<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        align="center"
      >
        <v-card
          width="300"
          class="mt-5"
        >
          <v-form>
            <v-card-text>
              <v-text-field
                label="Username"
                v-model="user.username"
                :error-messages="userErrors"
                @change="$v.user.username.$touch()"
                @blur="$v.user.username.$touch()"
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="user.password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
                :error-messages="passwordErrors"
                @change="$v.user.password.$touch()"
                @blur="$v.user.password.$touch()"
              ></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions
              class="justify-center"
            >
              <v-btn
                color="primary"
                @click="login()"
              >
                submit
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      show: ''
    }
  },
  validations: {
    user: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  computed: {
    userErrors() {
      const errors = []
      if(!this.$v.user.username.$dirty) return errors
      !this.$v.user.username.required && errors.push('Username is required.')
      return errors
    },
    passwordErrors() {
      const errors = []
      if(!this.$v.user.password.$dirty) return errors
      !this.$v.user.password.required && errors.push('Password is required.')
      return errors
    }
  },
  created() {

  },
  methods: {
    login() {
      this.$v.$touch();

      this.$store.dispatch('loginUser', this.user)    
    }
  }
}
</script>

<style>

</style>