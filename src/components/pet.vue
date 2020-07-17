<template>
  <div>
    <button @click="getPets"></button>

    <!--    <button @click="flush">刷线</button>-->
    <!--    <button @click="adoptPets"></button>-->
    <!--    <button @click="getPets"></button>-->

    <p >{{test}}</p>
    <p >{{id}}</p>
    <p >{{pet}}</p>
    <p>full{{pet.full}}</p>
    <p>mood{{pet.mood}}</p>
    <p>health{{pet.health}}</p>

    <p>这是home</p>
    <p>这是</p>

    <p>{{pets}}</p>
<!--    <button @click="routeToLogin">登录</button>-->
  </div>
</template>

<script>
  export default {
    name: "home1",
    data() {
      return {
        id:"",
        pet:{},
        pets: "",
        test:"",
        timer:"",
        quantity:""
      };
    },
    created() {
      this.id=this.$route.query.id;
      this.flush();
      this.timer = setInterval(this.clock, 1000);
      this.timer = setInterval(this.clock2, 5000);
    },
    methods: {
      feet(){
        this.pet.full=this.pet.health+this.quantity;
        this.writeToDatabase();
      },
      bath(){
        this.pet.mood=this.pet.health+20;
        this.writeToDatabase();
      },
      play(){

      },
      cure(){
        this.pet.mood=this.pet.health+20;
        this.writeToDatabase();
      },
      flush(){
        this.$store.dispatch("GetPetById",this.id).then(response => {
          this.loading = false;
          console.log("data",response.data);
          this.pet=response.data;
          console.log(this.pets.length);
          console.log("pet",this.pets);
          this.test="teststst";
        });
      },
      clock(){
        console.log("zhengzaizjak");
        this.pet.full=this.pet.health-1;
        this.pet.health=this.pet.health-1;
        this.pet.mood=this.pet.mood-1;
      },
      clock2(){
        console.log("写回数据库");
        this.writeToDatabase();
        this.flush();
      },
      writeToDatabase(){
        this.$store.dispatch("UpdatePet",this.pet).then(response => {
          this.loading = false;
          console.log("data",response.data);
          this.pet=response.data;
          console.log(this.pets.length);
          console.log("pet",this.pets);
          this.test="teststst";
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
      routeToPet(){
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
