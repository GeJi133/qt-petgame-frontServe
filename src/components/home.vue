<template>
  <div>
    <button @click="flush">刷线</button>
    <button @click="adoptPets"></button>
    <button @click="getPets"></button>

    <p v-for="pet in pets">lalal{{pet.pname}}</p>
    <p >{{pets.length}}</p>
    <p >{{test}}</p>


    <p>这是home</p>
    <p>这是</p>
  </div>
</template>

<script>

  export default {
    name: "home",
    data() {
      return {
        pets: [],
        test:"lal"
      };
    },
    mounted() {
      this.flush();
    },

    methods: {
      flush(){
        this.$store.dispatch("GetPetsByUser",localStorage.getItem('username')).then(response => {
          this.loading = false;
          console.log("data",response.data);
          this.pets=response.data;
          console.log(this.pets.length);
          console.log("pet",this.pets);
          this.test="teststst";
        });
      },

      getMyPets() {
        console.log("getProducts");
        this.loading = true;
        this.$store.dispatch("GetPets").then(response => {
          let status=response.status;
          console.log("response",response);
          console.log("status",status)

          if(status==200) {
            this.pets=response.data;
            console.log('response',response);
            this.$router.push({
              path: "/home",
            });
          }


        });
      },
      routeToLogin(){
        this.$router.push({
          path: "/login",
        });
      },
    }
  };



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
