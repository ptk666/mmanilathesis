<template>
    <span>

    <br>
    <br>
    <br>
    <br>
        <v-container>
            <v-row
            column
            >
                <v-col cols="6">
                    <v-carousel
                        hide-delimiters
                    >
                        <v-carousel-item
                            v-for="(img, i) in imgs"
                            :key="i"
                            :src="img.src"
                        >
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col 
                    cols="6"
                    align="center"
                >
                <v-form>
                    <div class="time">                 
                        <v-menu
                            top
                            :close-on-content-click="closeOnClick"
                        >
                            <template v-slot:activator="{on, attr}">
                                <v-text-field
                                    label="Time"
                                    v-bind="attr"
                                    v-on="on"         
                                    v-model="time"
                                >
                                </v-text-field>    
                            </template>
                            <v-time-picker
                                full-width
                                v-model="time"                   
                            >

                            </v-time-picker>
                        </v-menu>     
                    </div>
                        
                    <div class="date">
                        <v-menu
                            top
                            :close-on-content-click="false"
                        >
                            <template v-slot:activator="{on, attr}">
                                <v-text-field
                                    label="Date"
                                    v-bind="attr"
                                    v-on="on"
                                    v-model="date"
                                >                            
                                </v-text-field>
                            </template>
                            <v-date-picker
                                full-width
                                v-model="date"
                            >

                            </v-date-picker>
                        </v-menu>
                    </div>
                    
                    <v-select
                        :items="themes"
                        label="Themes"
                        v-model="selectedTheme"
                        item-text="name"
                        item-value="id"
                    >

                    </v-select>
                    
                    <v-text-field
                        label="# of Players"
                        :messages="['Minimum of 8, maximum of 60 pax']"
                        id="players"
                        v-model="players"
                    >
                    </v-text-field>
                    <v-text-field
                        label="Venue"
                        v-model="venue"
                    >
                    </v-text-field>
                    <v-btn
                        class="mr-3"
                        color="primary"
                        @click.once="book"
                
                    >
                        Submit
                    </v-btn>
                    <v-btn
                        color="secondary"
                        id="reset"
                    >
                        Reset
                    </v-btn>
                </v-form>
                    
                    
                </v-col>
            </v-row>
        </v-container>
    </span>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            closeOnClick: false,
            offset: true,
            imgs: [
                {src: 'murder4.png'},
                {src: 'revenge.jpg'}
            ],
            themes: [
              {

              }
            ],
            datatopass: 
            {
                time: '',
                date: '',
                selectedTheme: '',
                players: '',
                venue: '',
            }
        }
    },
    computed: {
      
    },
    created(){
        this.getthemes();
    },
    methods: {
        getthemes(){
            axios.get('http://localhost/murder_manila/public/api/themes')
            .then((res) => {
                console.log(res.data)
            });
        },
        book(){
            this.datatopass.book_time = this.time;
            this.datatopass.book_date = this.date;
            this.datatopass.theme_id = this.selectedTheme;
            this.datatopass.maxpax = this.players;
            this.datatopass.venue = this.venue;
            this.datatopass.discount_id = 1;
            this.datatopass.game_id = 1;
            axios.post('http://localhost/murder_manila/public/api/booking', this.datatopass)
            .then((res) => {
                // console.log(res.data.response);
                if(res.data.response){
                    console.log(res)
                }else{
                    console.log(res)
                }
            })
            this.time='';
            this.date='';
            this.selectedTheme='';
            this.players='';
            this.venue='';
        }
    },
    
    
}

</script>

<style scoped>
    .v-text-field {
        width: 50%;
    }
</style>

