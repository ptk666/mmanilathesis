<template>
  <div align="center" class="mb-10">
    <v-card width="1000">
      <v-card-title> Employees </v-card-title>
      <v-card-text>
        <v-data-table 
          :headers="headers" 
          :items="employees"
        >
           
        </v-data-table>
      </v-card-text>
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
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "First Name",
          sortable: false,
          value: "fname",
        },
        {
          text: "Last Name",
          value: "lname",
          sortable: false,
        },
        {
          text: 'Email',
          value: 'email',
          sortable: false
        },
        {
          text: 'Access Name',
          value: 'access_name',
          sortable: true
        },
      ],
      employees: [{
        id: '',
        fname: '',
        lname: '',
        email: '',
        access_name: ''
      }],
    }
  },
  methods: {
    getEmployees() {
      axios.get('http://35.225.91.92/api/AdminList', {
        headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')}
      })
        .then(res => {
          this.employees = res.data.data;
        })
    }
  },
  created() {
    this.getEmployees();
  }
};
</script>

<style scoped>
</style>