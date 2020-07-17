<template>
<div>
  <button @click="getPets"></button>

  <p>{{pets}}</p>
  <button @click="routeToLogin">登录</button>
</div>
</template>

<script>
    export default {
      name: "main",
      data() {
        return {
          pets: ""
        };
      },
      created() {

      },
      methods: {
        getPets() {
          console.log("getProducts");
          this.loading = true;
          this.$store.dispatch("GetPets").then(response => {
            this.loading = false;
            console.log("data",response.data);
            this.pets=response.data[0];
            console.log("pet",this.pets);

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
