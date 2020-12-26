<template>
    <div>
      <v-app-bar>
        <v-toolbar-title
            class="font-weight-light"
        >
            <span
              class="font-weight-bold"
            >
                MURDER
            </span> MANILA
        </v-toolbar-title>
      </v-app-bar>

      <v-container>
          <v-row>
              <v-col
                cols="12"
                align="center"
              >
                <v-card                    
                    width="300"
                    class="mt-5"
                >
                    <v-form
                        @submit.prevent="login"
                    >
                        <v-card-text>                        
                            <v-text-field
                                label="Username"
                                v-model="user.username"
                            >
                            </v-text-field>
                            <v-text-field
                                label="Password"
                                type="password"
                                v-model="user.password"
                            >
                            </v-text-field>                        
                                              
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions
                            class="justify-center"
                    >
                            <v-btn
                                color="primary"
                                type="submit"        
                                @click="snackbar.show = true"                          
                            >
                            proceed
                            </v-btn>
                            <span
                                v-if="responses == true"
                                color="green"

                            >
                                <v-snackbar
                                    v-model="snackbar.show"
                                    
                                >
                                    {{ snackbar.messages }}
                                </v-snackbar>
                            </span>
                            <span
                                v-else
                            >
                                <v-snackbar
                                    v-model="snackbar.show"
                                    color="error"
                                >
                                    {{ snackbar.messages }}
                                </v-snackbar>
                            </span>
                        </v-card-actions>
                    </v-form>  
                </v-card>
              </v-col>  
          </v-row>
      </v-container>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    components: {
        
    },
    data() {
        return {
            positions: [
                {

                }
            ],
            user: {
                username: '',
                password: ''
            },
            snackbar: {
                show: false,
                timeout: 10000,
                colorSuccess: 'success',
                colorError: 'error',
                messages: '',
                responses: ''
            },
        }
    },
    created() {
        
    },
    methods: {
        login() {
             axios.post(`http://murder-manila/api/logIn`, this.user)
            .then(res => {
                const loginData = res.data;
                this.snackbar.messages = loginData.message;
                this.snackbar.responses = loginData.response;
                console.log(loginData)

                if(loginData.token) {
                    sessionStorage.setItem(
                        'access_token',
                        loginData.token
                    )
                    this.$router.push('/owner')
                }
            })
            .catch(res => {
                console.log(res.data.message);
            })


        }
    },
    mounted() {
        
    },
    watch: {
        isSuccess(snackbar) {
            this.snackbar = this.snackbar.responses
            if(snackbar) {
                this.$router.push('/owner')
            }
        }
    }
}
</script>

<style scoped>

</style>