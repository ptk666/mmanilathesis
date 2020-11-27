<template>
    <div class="app">
        <br>
        <br>
        <br>
        <br>
        <v-container>
            <v-row
                column
            >
                <v-col
                    cols="12"
                >
                    <v-card
                        class="d-flex justify-space-between"
                        flat
                    >
                        <v-card
                            flat
                            width="250"
                        >
                            <v-card-title
                                class="text-uppercase font-weight-light"
                            >
                                <em>booking details</em>
                            </v-card-title>
                            <v-card-text>
                                <v-text-field
                                    regular
                                    label="First Name"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                    v-model="fname"
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Last Name"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                    v-model="lname"
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Contact #"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                    v-model="contactNumber"
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Email"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                    v-model="email"
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Time"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                    v-model="time"
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Date"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                    v-model="date"
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Theme"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                    v-model="theme"
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="# of Players"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                    v-model="maxpax"
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Venue"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                    v-model="venue"
                                ></v-text-field>
                            </v-card-text>
                        </v-card>
                        <v-card
                            outlined
                            width="400"
                            height="480"
                            align="center"
                        >
                            <v-card-title
                                class="text-uppercase font-weight-light"
                            >
                                <em>receipt</em>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-text-field
                                    prefix="Php"
                                    label="Reservation Fee"
                                    placeholder="Placeholder"
                                    readonly
                                    v-model="downpayment"
                                >
                                </v-text-field>
                            </v-card-text>
                            <v-divider></v-divider>                                                             
                            <v-card-text>
                                <v-text-field
                                    label="Discount Code"
                                    placeholder="Placeholder"
                                >
                                </v-text-field>
                                <v-text-field
                                    prefix="%"
                                    label="Discount"
                                    placeholder="Placeholder"
                                    readonly
                                >
                                </v-text-field>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-text-field
                                    readonly
                                    label="Total"
                                    placeholder="Placeholder"
                                    prefix="Php"
                                >

                            </v-text-field>
                            <v-btn
                                color="success"
                                @click.once="sendEmail"
                                medium
                                class="mb-3"
                            >
                                send receipt in email
                            </v-btn>
                            </v-card-text>
                                
                            
                            
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
                fname: '',
                lname: '',
                contactNumber: '',
                email: '',
                time: '',
                date: '',
                theme: '',
                venue: '',
                maxpax: 0,
                constPlayer: 8000,
                perHead: 500,
                vat: 0.12,
                totalPlayers: 0,
                totalAmount: 0,
                totalVAT: 0,
                totalAmountWithVAT: 0,
                downpayment: 0        
        }
    },
    methods: {
        getSummaryData() {
            axios.get('http://localhost/murder_manila/public/api/bookingSummary/1')
            .then((res) => {
                const summaryData = res.data.data[0];

                this.fname = summaryData.firstname;
                this.lname = summaryData.lastname;
                this.contactNumber = summaryData.mobileNumber;
                this.email = summaryData.email;
                this.time = summaryData.time;
                this.date = summaryData.date;
                this.theme = summaryData.game;
                this.maxpax = summaryData.maxpax;
                this.venue = summaryData.venue;
               
               this.totalPlayers = this.maxpax - 8;
               this.totalAmount = (this.totalPlayers * this.perHead) + this.constPlayer;
               this.totalVAT = this.totalAmount * this.vat;
               this.totalAmountWithVAT = (this.totalAmount + this.totalVAT);
               this.downpayment = (this.totalAmountWithVAT / 2);
            });
            
        },
    },
    mounted() {
        this.getSummaryData();
    },
}
</script>

<style scoped>

</style>