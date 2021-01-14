<template>
  <div
    align="center"
  >
    <v-card
      width="1000"
      class="mt-5 elevation-3"
    >
      <v-card-title>
        Bookings
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="datas"
      >
        <template
        v-slot:item.actions="{ item }"
      >
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small       
          @click="deleteItem(item)"   
        >
          mdi-delete
        </v-icon>
      </template>
      </v-data-table>
      <v-dialog
        v-model="dialog"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    v-model="editedItem.bookDate"
                    label="Book Date"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    v-model="editedItem.bookTime"
                    label="Book Time"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    v-model="editedItem.theme"
                    label="Theme"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    v-model="editedItem.maxpax"
                    label="# of Persons"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    v-model="editedItem.venue"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="close"
            >
              Cancel
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="save"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="dialogDelete"
        max-width="500px"
      >
        <v-card>
          <v-card-title
            class="headline"
          >
            Are you sure you want to delete this reservation?
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="closeDelete"
            >
              Cancel
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="deleteItemConfirm"
            >
              Ok
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: true,
          value: 'id' 
        },
        {
          text: 'Reference Number',
          value: 'referenceNumber',
          sortable: false
        },
        {
          text: 'Book Date',
          value: 'bookDate',
          sortable: true
        },
        {
          text: 'Book Time',
          value: 'bookTime',
          sortable: false
        },
        {
          text: 'Theme',
          value: 'theme',
          sortable: false
        },
        {
          text: 'Persons',
          value: 'maxpax',
          sortable: false
        },
        {
          text: 'Venue',
          value: 'venue',
          sortable: false
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        }
      ],
      datas: [{
        id: '1',
        referenceNumber: '1234567890',
        bookDate: 'test',
        bookTime: 'test',
        theme: 'test',
        maxpax: 'test',
        venue: 'test'
      }],
      editedItem: {
        bookDate: '',
        bookTime: '',
        theme: '',
        maxpax: '',
        venue: ''
      },
      defaultItem: {
        bookDate: '',
        bookTime: '',
        theme: '',
        maxpax: '',
        venue: ''
      }
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.datas.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      this.editedIndex = this.datas.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDeete = true
    },
    deleteItemConfirm() {
      this.datas.splice(this.editedIndex, 1)
      this.closeDelete
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if(this.editedIndex > -1) {
        Object.assign(this.datas[this.editedIndex], this.editedItem)
      }
      else {
        this.datas.push(this.editedItem)
      }
      this.close();
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    }
  },

}
</script>

<style>

</style>