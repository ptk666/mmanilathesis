<template>
    <div id="app">
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
                    align="center"
                >
                    <v-form>
                        <v-text-field
                            label="First Name"
                            outlined
                            dense
                            v-model="firstname"
                        ></v-text-field>
                        <v-text-field
                            label="Last Name"
                            outlined
                            dense
                            v-model="lastname"
                        ></v-text-field>
                        <v-text-field
                            label="Contact #"
                            outlined
                            dense
                            v-model="number"
                        ></v-text-field>
                        <v-text-field
                            label="Email"
                            outlined
                            dense
                            v-model="email"
                        ></v-text-field>
                        <v-btn
                            class="mr-5"
                            color="primary"
                            @click.once="submit"
                        >Submit</v-btn>
                        <v-btn
                            color="secondary"
                            type="reset"
                        >Reset
                        </v-btn>
                    </v-form>
                    
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
            firstname: '',
            lastname: '',
            number: '',
            email: '',
            infos: {}
        }
    },
    created() {
        
    },
    methods: {
        // id() {
        //     axios.get('http://localhost/murder_manila/public/api/booking')
        //     .then((res) => {
        //         this.game_id = res.;
        //     });
        // },

        submit() {
            this.infos.fname = this.firstname;
            this.infos.lname = this.lastname;
            this.infos.mobile_number = Number(this.number);
            this.infos.email = this.email;
            this.infos.game_id = 1;
            axios.post('http://localhost/murder_manila/public/api/SaveClient', this.infos)
            .then((res) => {
                console.log(res)
            })
            this.firstname='';
            this.lastname='';
            this.number='';
            this.email='';
            
            this.$router.push('/form/contacts/summary');
        },
        
    }
}
</script>

<style scoped>
    .v-text-field {
        width: 50%;
    }
</style>