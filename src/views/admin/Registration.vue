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
                    v-model="firstName"
                    name="firstName"
                    ></v-text-field>
                    <v-text-field
                    label="Last Name"
                    v-model="lastName"
                    name="lastName"
                    ></v-text-field>
                    <v-text-field
                    label="Username"
                    v-model="username"
                    name="username"
                    ></v-text-field>
                    <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                    name="password"
                    ></v-text-field>
                    <v-select
                    label="Employee Status"
                    :items="items"
                    item-text="status"
                    v-model="employeeStatus"
                    name="employeeStatus"
                    ></v-select>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions
                    class="d-flex justify-center"
                >
                    <v-btn
                        text
                        color="primary"
                    >
                        Submit
                    </v-btn>
                </v-card-actions>
            </v-form>
            </v-card>
    </div>
</template>

<script>
import NavbarAdmin from '@/components/NavbarAdmin.vue'
export default {
    data() {
        return {
            items: [
                {
                    status: 'Event Manager'
                },
                {
                    status: 'Operation Supervisor'
                },
                {
                    status: 'Owner'
                }
            ],
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            employeeStatus: ""
        }
    },
    components: {
        NavbarAdmin
    }
}
</script>

<style scoped>

</style>