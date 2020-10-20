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
                            >
                            </v-text-field>
                            <v-text-field
                                label="Password"
                                type="password"
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

export default {
    components: {
        
    }
}
</script>

<style scoped>

</style>