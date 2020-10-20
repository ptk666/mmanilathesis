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
                    <v-text-field
                        label="First Name"
                        readonly
                    ></v-text-field>              
                    <v-text-field
                        label="Last Name"
                        readonly
                    ></v-text-field>         
                    <v-text-field
                        label="Contact #"
                        readonly
                    ></v-text-field>  
                    <v-text-field
                        label="Email"
                        readonly
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
                                >
                                    Send verification code
                                </v-btn>

                            
                            </template>    

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
                                        router-link to="/form/contacts/summary/receipt"
                                    >
                                        i agree
                                    </v-btn>
                                </v-card-actions>
                            </v-card>      
                        </v-dialog>
                    </v-form>                                      
                </v-col>
                <v-col
                    cols="6"
                >                              
                    <v-text-field
                        label="Time"
                        readonly
                    ></v-text-field>         
                    <v-text-field
                        label="Date"
                        readonly
                    ></v-text-field>  
                    <v-text-field
                        label="Theme"
                        readonly
                    ></v-text-field>  
                    <v-text-field
                        label="# of Players"
                        readonly
                    ></v-text-field>  
                    <v-text-field
                        label="Venue"
                        readonly
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
        }
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