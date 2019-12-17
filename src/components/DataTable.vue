<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="startData"
    :single-select="selected"
    item-key="timestamp"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch 
        v-model="singleSelect" 
        label="Single select" 
        class="pa-3"
        ></v-switch>
        <Popup v-bind:selection="selected"/>
    </template>
  </v-data-table>
</template>

<script>
import Popup from './Popup';
export default {
components: {
    Popup
  },
  data: () => ({
        singleSelect: true,
        selected: [],
        headers: [
          {
            text: 'Timestamp',
            align: 'left',
            sortable: true,
            value: 'timestamp',
          },
          { text: 'Campaign', value: 'campaign' },
          { text: 'Ad Set', value: 'medium' },
          { text: 'Ad Name', value: 'source' },
          { text: 'Postal Code', value: 'postal' },
        ],
      
  }),//end data
  methods: {
      updateSelected(data){
          alert("We have made a selection: "  );
          console.log("We have made a selection: " , data );
      }
  },
  computed: {
            startData() {
                return this.$store.state.startData;
            },
            contactData() {
                return this.$store.state.contactData;
            },
            selected() {
              alert("asdljflakj")
                const selectedRow= this.selected[0];
                console.log("selected: ", selecteRow);
                //this.$store.state.stinky('data')
                
              //  return selectedRow ? `${selectedRow.postal}` : "no data selected";
            }
        },//end computed
        created() {
            this.$store.dispatch('getData');
            this.$store.dispatch('getContacts');
        } //end created  */
};//end export
</script>
