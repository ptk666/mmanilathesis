<template>
    <div
        align="center"
    >
    <NavbarAdmin
        class="mb-10"
     />
            <v-card
            width="1000"
            >
            <v-card-title>
                Register
            </v-card-title>
            <v-divider></v-divider>
            <v-form>
                <v-card-text>
                    <v-text-field
                    label="First Name"
                    v-model="registration.firstName"
                    name="firstName"
                    ></v-text-field>
                    <v-text-field
                    label="Last Name"
                    v-model="registration.lastName"
                    name="lastName"
                    ></v-text-field>
                    <v-text-field
                    label="Username"
                    v-model="registration.username"
                    name="username"
                    ></v-text-field>
                    <v-text-field
                    label="Password"
                    type="password"
                    v-model="registration.password"
                    name="password"
                    ></v-text-field>
                    <v-text-field
                    label="Email"
                    type="email"
                    v-model="registration.email"
                    name="email"
                    ></v-text-field>
                    <v-select
                      :items="positions"
                      label="Positions"
                      item-text="access_name"
                      item-value="id"
                      v-model="registration.position_id"
                    >
                    </v-select>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions
                    class="d-flex justify-center"
                >
                    <v-btn
                        text
                        color="primary"
                        @click="register()"
                    >
                        Submit
                    </v-btn>
                </v-card-actions>
            </v-form>
            </v-card>
    </div>
</template>

<script>
import axios from 'axios'
import NavbarAdmin from '@/components/adminComponents/NavbarAdmin.vue'
export default {
    data() {
        return {
            registration: {
              firstName: "",
              lastName: "",
              username: "",
              password: "",
              email: "",
              position_id: ""
            },
            positions: []
        }
    },
    components: {
        NavbarAdmin
    },
    methods: {
      register() {
        axios.post('http://murder-manila/api/adminRegister', {
          fname: this.registration.firstName,
          lname: this.registration.lastName,
          username: this.registration.username,
          password: this.registration.password,
          email: this.registration.email,
          position_id: this.registration.position_id
        })
          .then(res => {
            this.registration.firstName = ''
            this.registration.lastName = ''
            this.registration.username = ''
            this.registration.password = ''
            this.registration.email = ''
            this.registration.position_id = ''
            console.log(res.data.data)
          })
      },
      getPositions() {
        axios.get('http://murder-manila/api/positions', {
          headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')}
        })
        .then(res => {
          this.positions = res.data.data;
        })
      }
    },
    created() {
      this.getPositions();
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('token');
    }
}

</script>

<style scoped>

</style>