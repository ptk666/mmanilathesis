<template>
  <div>
    <v-container>
      <v-row
        column
      >
        <v-col
          cols="12"
          align="center"
        >
          <ContactsField />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContactsField from '@/components/contactsComponents/ContactsField'
export default {
  components: {
    ContactsField
  }
}
</script>

<style>

</style>