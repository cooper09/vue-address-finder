<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
          class="mb-4"
        >
          Check Address
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Locate Conversion
        </v-card-title>

        <v-card-text>
        <v-btn class="mt-3" @click='test()'>Search for possible Addresses</v-btn>

        <v-content>
        {{myAddresses}}
        </v-content>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import modulesML from '@/helpers/modulesML'
export default {
    name: 'Popup',
    props: {
        selection: {
            addresses: [],
            campaign: String,
            city: String,
            country: String,
            ip: String,
            postal: String,
            latitude: String,
            longitude: String,
            medium: String,
            state: String,
            timestamp: String
        }
    },
    computed:{
      myAddresses() {
        return this.$store.state.addresses
      }
    },
    data () {
      return {
        dialog: false,
       // addresses: this.$store.state.addresses
      }
  },//end data
  methods: {
      test() {
          console.log('test popup: ', this.selection[0]._id );
          let stinky = this.selection[0]
          console.log("Stinky1 says: ", stinky.addresses[0].split(', '));
          let addrList = stinky.addresses[0].split(', ');

         //const smoozy = modulesML.LSTM(addrList);
         const smoozy = modulesML.runLSTM(addrList);
         this.$store.dispatch("getAddresses", smoozy );
      }//end test
  },//end methods
};//end export
</script>
