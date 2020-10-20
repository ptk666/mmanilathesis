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
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Last Name"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Contact #"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Email"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Time"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Date"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Theme"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="# of Players"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
                                ></v-text-field>
                                <v-text-field
                                    regular
                                    label="Venue"
                                    placeholder="Placeholder"
                                    readonly
                                    dense
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
                                @click="alert"
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
export default {
    data() {
        return {

        }
    },
    methods: {
        alert() {
            alert('Sent successful')
        }
    },

}
</script>

<style scoped>

</style>