<template>
  <div
    align="center"
  >
    <v-card
      width="1000"
      class="my-10"
    >
      <v-card-title>
        Daily Bookings
      </v-card-title>
      <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
            ></v-calendar>            
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
                <v-icon
                  icon
                  class="mr-3"
                >mdi-check</v-icon>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>              
            </v-toolbar>
            <v-card-text>
              <span><strong>Reference Number:</strong> {{ selectedEvent.referenceNumber }}</span><br>
              <span><strong>Email:</strong> {{ selectedEvent.email }}</span><br>
              <span><strong>Mobile Number:</strong> {{selectedEvent.mobile_number }}</span><br>
              <span><strong>Start Time:</strong> {{ selectedEvent.start }}</span><br>
               <span><strong>End Time:</strong> {{ selectedEvent.end }}</span><br>
              <span><strong>Persons:</strong> {{ selectedEvent.maxpax }}</span><br>
              <span><strong>Theme:</strong> {{ selectedEvent.theme }}</span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
  export default {
    data: () => ({
      focus: '',
      type: 'day',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [
        {
          name: '',
          start: '',
          end: '',
          color: '#25282D'
        }
      ],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    mounted () {
      this.$refs.calendar.checkChange()
      this.updateRange();
    },
    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => {
            this.selectedOpen = true
          }, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange () {
        let events = {}
        const today = new Date().toISOString().substr(0, 10)
        const date = "2021-01-28"
        const time = "12:00"
        const end_time = "16:00"
        const start = (`${date}` + ` ` + `${time}`)
        const end   = (`${date}` + ` ` + `${end_time}`)
        // const min = new Date(`${start.date}T00:00:00`)
        // const max = new Date(`${end.date}T23:59:59`)
        // const days = (max.getTime() - min.getTime()) / 86400000
        // const eventCount = this.rnd(days, days + 20)     
        axios.post('http://35.225.91.92/api/dailyBookings', {
          book_date: today
        })
          .then(res => {
            let events = []
            let dataEvents = Object.values(res.data.data) 
            console.log(dataEvents)        
            events.push(
              {
                name: dataEvents[0].name,
                start: dataEvents[0].start,
                end: dataEvents[0].end,
                color: '#977B57',
                referenceNumber: dataEvents[0].reference_number,
                theme: dataEvents[0].theme,
                maxpax: dataEvents[0].maxpax,
                mobile_number: dataEvents[0].mobile_number,
                email: dataEvents[0].email
              },
              {
                name: dataEvents[1].name,
                start: dataEvents[1].start,
                end: dataEvents[1].end,
                color: '#8E959B',
                referenceNumber: dataEvents[1].reference_number,
                theme: dataEvents[1].theme,
                maxpax: dataEvents[1].maxpax,
                mobile_number: dataEvents[1].mobile_number,
                email: dataEvents[1].email
              },
              {
                name: dataEvents[2].name,
                start: dataEvents[2].start,
                end: dataEvents[2].end,
                color: '#90543D',
                referenceNumber: dataEvents[2].reference_number,
                theme: dataEvents[2].theme,
                maxpax: dataEvents[2].maxpax,
                mobile_number: dataEvents[2].mobile_number,
                email: dataEvents[2].email
              },
              {
                name: dataEvents[3].name,
                start: dataEvents[3].start,
                end: dataEvents[3].end,
                color: '#25282D',
                referenceNumber: dataEvents[3].reference_number,
                theme: dataEvents[3].theme,
                maxpax: dataEvents[3].maxpax,
                mobile_number: dataEvents[3].mobile_number,
                email: dataEvents[3].email
              },
            )
            this.events = events
          })
          // .then(res => {           
          //   const datas = res.data.data
          //   // this.events = JSON.parse(JSON.stringify(res.data.data))
          //   // console.log(datas[1].id)
          //   // console.log(JSON.parse(JSON.stringify(res.data.data[1]))) 
          //   // console.log(datas[1].book_date + ' ' + datas[1].start)          
          //   events.push({
          //     name: datas[1].name,
          //     start: (datas[1].book_date + ' ' + datas[1].start),
          //     end: (datas[1].book_date + ' ' + datas[1].end),
          //     color: '#977B57',
          //     referenceNumber: datas[1].reference_number,
          //     theme: datas[1].theme,
          //     maxpax: datas[1].maxpax,
          //     mobile_number: datas[1].mobile_number,
          //     email: datas[1].email
          //   },
          //   {
          //     name: datas[2].name,
          //     start: (datas[2].book_date + ' ' + datas[2].start),
          //     end: (datas[2].book_date + ' ' + datas[2].end),
          //     color: '#8E959B',
          //     referenceNumber: datas[2].reference_number,
          //     theme: datas[2].theme,
          //     maxpax: datas[2].maxpax,
          //     mobile_number: datas[2].mobile_number,
          //     email: datas[2].email
          //   },
          //   {
          //     name: datas[3].name,
          //     start: (datas[3].book_date + ' ' + datas[3].start),
          //     end: (datas[3].book_date + ' ' + datas[3].end),
          //     color: '#90543D',
          //     referenceNumber: datas[3].reference_number,
          //     theme: datas[3].theme,
          //     maxpax: datas[3].maxpax,
          //     mobile_number: datas[3].mobile_number,
          //     email: datas[3].email
          //   },
          //   {
          //     name: datas[4].name,
          //     start: (datas[4].book_date + ' ' + datas[4].start),
          //     end: (datas[4].book_date + ' ' + datas[4].end),
          //     color: '#25282D',
          //     referenceNumber: datas[4].reference_number,
          //     theme: datas[4].theme,
          //     maxpax: datas[4].maxpax,
          //     mobile_number: datas[4].mobile_number,
          //     email: datas[4].email
          //   })
          //   this.events = events
          // })
          //   .then(res => {
          //   this.events = res.data.data;
          //   console.log(res.data.data)
          //   events.push({
          //     name: res.data.name,
          //     start: start,
          //     end: end,
          //     color: '#25282D'              
          //   },
          //   {
          //     name: res.data[1].name,
          //     start: '2021-01-28 14:00',
          //     end: '2021-01-28 15:30',
          //     color: '#25282D'
          //   },
          //   {
          //     name: res.data[2].name,
          //     start: '2021-01-28 16:00',
          //     end: '2021-01-28 17:30',
          //     color: '#25282D'
          //   },
          //   {
          //     name: res.data[3].name,
          //     start: '2021-01-28 16:00',
          //     end: '2021-01-28 17:30',
          //     color: '#25282D'
          //   })
          // })
          // this.events = events;
        // for (let i = 0; i < eventCount; i++) {
        //   const allDay = this.rnd(0, 3) === 0
        //   const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        //   const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        //   const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        //   const second = new Date(first.getTime() + secondTimestamp)



          // events.push({
          //   name: this.names[this.rnd(0, this.names.length - 1)],
          //   start: first,
          //   end: second,
          //   color: this.colors[this.rnd(0, this.colors.length - 1)],
          //   timed: !allDay,
          // })
                    
        // this.events = events
      }
    }
  } 
</script>