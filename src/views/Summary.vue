<template>
    <div class="app">
        <br>
        <br>
        <br>
        <br>
        <v-container>
            <v-row>
                <v-col
                    cols="6"
                    align="center"
                >
                    <v-form>
                        <v-text-field
                        label="First Name"
                        readonly
                        v-model="fname"
                    ></v-text-field>              
                    <v-text-field
                        label="Last Name"
                        readonly
                        v-model="lname"
                    ></v-text-field>         
                    <v-text-field
                        label="Contact #"
                        readonly
                        v-model="contactNumber"
                    ></v-text-field>  
                    <v-text-field
                        label="Email"
                        readonly
                        v-model="email"
                    ></v-text-field>
                        <v-form>
                            <v-dialog
                            v-model="dialog"
                            width="600"
                        >
                                <template v-slot:activator="{on, attrs}"                                                    >
                                    <v-btn
                                        color="success"
                                        class="mt-3"
                                        v-bind="attrs"
                                        v-on="on" 
                                        @click.once="snackbar.show = true; getVerificationCode()"
                                    >
                                        Send verification code
                                    </v-btn>

                                
                                </template>    

                                <v-snackbar
                                    v-model="snackbar.show"
                                    :timeout="timeout"
                                    absolute
                                    top
                                    color="success"
                                    class="font-weight-bold">
                                        {{ snackbar.text }}

                                    <template v-slot:action="{attrs}">
                                        <v-btn
                                            text
                                            v-bind="attrs"
                                            @click="snackbar = false">
                                        CLOSE 
                                        </v-btn>
                                </template>
                                </v-snackbar>

                                


                                <v-card
                                    align="center"
                                    class="justify-center"
                                >
                                    <v-card-title 
                                        class="pb-0"
                                    >
                                        <v-text-field                                        
                                            outlined
                                            label="Verification Code"
                                            id="verification"
                                            class="pt-4"
                                            v-model="referenceNumber"
                                        >
                                        </v-text-field>
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-title
                                        class="text-uppercase justify-center font-weight-bold"
                                    >
                                        terms & agreements
                                    </v-card-title>
                                    <v-card-text
                                        id="text"
                                    >
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur accusamus tempore quod nostrum fuga, tempora excepturi rem expedita recusandae eveniet in assumenda! Consequuntur veritatis repellendus at laudantium, vitae, autem voluptate numquam exercitationem mollitia nam similique maiores culpa accusantium totam nemo eaque accusamus quidem. Modi odio pariatur dignissimos impedit. Consectetur, iure.
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-card-actions class="justify-center">
                                        <v-btn
                                            text
                                            @click="verificationSnackbar.show = true"
                                        >
                                            I Agree
                                        </v-btn>
                                        <span v-if="referenceNumber == vernum">
                                            <v-snackbar
                                            v-model="verificationSnackbar.show"
                                            :color="verificationSnackbar.colorSuccess"
                                            >
                                                {{ verificationSnackbar.textSuccess }}
                                            </v-snackbar>
                                        </span>
                                        <span v-else>
                                            <v-snackbar
                                            v-model="verificationSnackbar.show"
                                            :color="verificationSnackbar.colorFail"
                                            >
                                                {{ verificationSnackbar.textFail }}
                                            </v-snackbar>

                                        </span>
                                    </v-card-actions>
                                </v-card>      
                            </v-dialog>
                        </v-form>                           
                    </v-form>                           
                </v-col>
                <v-col
                    cols="6"
                >                              
                    <v-text-field
                        label="Time"
                        readonly
                        v-model="time"
                    ></v-text-field>         
                    <v-text-field
                        label="Date"
                        readonly
                        v-model="date"
                    ></v-text-field>  
                    <v-text-field
                        label="Theme"
                        readonly
                        v-model="theme"
                    ></v-text-field>  
                    <v-text-field
                        label="# of Players"
                        readonly
                        v-model="maxpax"
                    ></v-text-field>  
                    <v-text-field
                        label="Venue"
                        readonly
                        v-model="venue"
                    >
                    </v-text-field>
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
            dialog: false,
            fname: '',
            lname: '',
            contactNumber: '',
            email: '',
            time: '',
            date: '',
            theme: '',
            maxpax: '',
            venue: '',
            verificationNumber: null,
            snackbar: {
                show: false,
                text: 'We have sent you a verification code, please check your email.',
                timeout: 10000
            },
            verificationSnackbar: {
                show: false,
                textSuccess: 'Successful!',
                textFail: 'Please try again!',
                colorSuccess: 'success',
                colorFail: 'error'
            }

            
 
        }
    },
    mounted() {
        this.getdata();
    },
    methods: {
        getdata() {
            axios.get(`http://localhost/murder_manila/public/api/bookingSummary/1`)
            .then((response) => {
                const summaryData = response.data.data[0];

                this.fname = summaryData.firstname
                this.lname = summaryData.lastname
                this.contactNumber = summaryData.mobileNumber
                this.email = summaryData.email
                this.time = summaryData.time
                this.date = summaryData.date 
                this.theme = summaryData.game 
                this.maxpax = summaryData.maxpax 
                this.venue = summaryData.venue
                this.vernum = summaryData.verification_number
                
                console.log(response.data.data)

                
        
            });
        },
        // getVerificationCode() {
        //     axios.get(`http://localhost/murder_manila/public/api/sendVerification`)
        //     .then((response) => {
        //         console.log(response.data)
        //     });
        // },
        
    },
    computed: {
        
    }
}
</script>

<style scoped>
    .v-text-field {
        width: 100%;
    }
    #verification {
        width: 50%;
    }
    #text {
        letter-spacing: 0.3px;
    }
</style>

