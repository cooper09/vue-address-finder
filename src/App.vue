<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Multi-Line</span>
        <span class="font-weight-light">Conversion Report</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href=""
        target="_blank"
      >
        <span class="mr-2">First make Selection using the checkbox <br/>Then click the "Check Address" button.</span>
      </v-btn>
    </v-app-bar>

    <v-content   class="animated fadeIn">
      <p>App.vue</p>
      <HelloWorld/> 
    </v-content>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>

    <v-content>
      <DataTable/>
    </v-content>

  </v-app>
</template>

<script>
import DataTable from './components/DataTable';
import Popup from './components/Popup';

export default {
  name: 'App',
  components: {
    DataTable,
    Popup
  },
  data: () => ({
    //
  }),
};
</script>
<style>
body {
  padding: 2em;
}

</style>
