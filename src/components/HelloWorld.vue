<template>
  <v-container   class="animated fadeIn">
   
   <v-btn @click="nextPage()">Next Page</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  
  }),
  methods: {
    nextPage() {
      alert("next page please")
      this.$router.push('/about')
    }
  }
};//end export
</script>
<style scoped>
  .btn {
    background: #ddd;
    cursor: pointer;
  }
</style>
