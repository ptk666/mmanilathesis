<template>
  <div align="center">
    <v-card width="1000" class="mt-10 elevation-3">
      <v-date-picker
        :now="today"
        v-model="date"
        class="mt-4"
        full-width
        color="red"
        no-title
        :events="events"
        v-bind="attrs"
        v-on="on"
        @click.stop="dialog = true"
      >
      <p>{{ date }}</p>
      </v-date-picker>
      <v-card>
      <v-dialog
        v-model="dialog"
        max-width="800px"
      >
        <v-card>
          <v-data-table
          
          ></v-data-table>
        </v-card>
        
      </v-dialog>
        
      </v-card>
    </v-card>
  </div>
</template>


<script>
import axios from "axios";
import moment from "moment";
export default {
  data: () => ({
    today: "",
    date: '',
    events: [
      {
        start: "",
        end: "",
      },
    ],
    formattedTime: "",
    dialog: false,
  }),
  mounted() {},
  methods: {
    dateToday() {
      this.today = new Date().toISOString().substr(0, 10);
    },
    getBookings() {
      const dateToday = new Date().toISOString().substr(0, 10);
      axios
        .post("http://murder-manila/api/dailyBookings", {
          book_date: dateToday,
        })
        .then((res) => {
          this.events = res.data.data;
        });
    },
  },
  created() {
    this.getBookings();
  },
};
</script>