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
                    <v-form>
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
                                @click.once="login" 
                            >
                            proceed
                            </v-btn>
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
            }
        }
    },
    created() {
        this.getPositions() 
    },
    methods: {
        getPositions() {
            axios.get('http://localhost/murder_manila/public/api/positions')
            .then((response) => {
                console.log(response.data.data)
                this.positions = response.data.data
            });
        },
        login() {
            axios.get(' ')
        }
    }
}
</script>

<style scoped>

</style>