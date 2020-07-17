<template>
  <div>
    <button @click="getPets"></button>

<!--    <button @click="flush">刷线</button>-->
<!--    <button @click="adoptPets"></button>-->
<!--    <button @click="getPets"></button>-->

    <a v-for="pet in pets" href="#" @click="routeToPet(pet.pid)">lalal{{pet.pname}}</a>
    <p >{{pets.length}}</p>
    <p >{{test}}</p>
    <p>这是home</p>
    <p>这是</p>
    <button @click="addNew">添加新宠物</button>

<!--    <button @click="routeToLogin">登录</button>-->
  </div>
</template>

<script>
  export default {
    name: "home1",
    data() {
      return {

        pets: "",
        test:""
      };
    },
    created() {
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
      addNew(){
        this.$router.push({
          path: "/adopt",
        });
      },
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
      routeToPet(id){
        this.$router.push({
          path: "/pet",
          query:{
            id:id
          }
        });
      },

    }
  };



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
