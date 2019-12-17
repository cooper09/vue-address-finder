<template>

  <div class="myform blue-lighten-5">
    <v-btn class="closeBtn indigo white--text" @click="closeMe">X</v-btn>
    <br/><br/>
            <v-form px3 class="indigo--text ">
            <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                color="indigo"
                ></v-text-field>
            <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                ></v-text-field>
            <v-text-field 
                label="Phone"  
                v-model="phone"
                @input="$v.phone.$touch()"
                @blur="$v.phone.$touch()" 
                ></v-text-field>

                <v-btn class="mr-4 indigo white--text" @click="submit">submit</v-btn>
        </v-form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    computed:{
        campaign() {
            return this.$store.state.campaign;
        },
        selection() {
            return this.$store.state.selection;
        }
    },
  methods: {
    clearFields () {
      alert("clear the fields")
    },
    submit() {
        //cooper s - get campaign identifier from URL
        let campaign = this.$store.state.campaign;
        let selection = this.$store.state.selection;

        switch (selection ){
            case 1:
                selection = "Insurance Policies"
            break;
            case 2:
                selection = "Defensive Driving Course"
            break;
            case 3:
                selection = "Defensive Driving Instructor"
            break;
            case 4:
                selection = "Become an Agent"
            break;
        }//end switch
   
      var timestamp = new Date();

      var infoObj = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        campaign: campaign,
        selection: selection,
        timestamp: timestamp
      }

      const url = `https://sleepy-everglades-99189.herokuapp.com/multiline`;

      axios.post(url,infoObj)
        .then(function (response) {
          console.log("POST: ", response.data);
          alert("Thank you, we will contact you shortly " )
          closeMe();
        })
        .catch(function (error) {
          console.log("POST Error: ",  error);
        });//end post

    },//end submit
    closeMe(){
      this.$router.push('/');
    }
  }
}//export
</script>
<style scoped>
    .myform {
        background: #eee;
        padding: 1em;
        margin: -3em 3em 3em;
    }
  .closeBtn {
    float: right;
  }
</style>
