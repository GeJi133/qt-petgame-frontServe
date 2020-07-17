<template>
  <div>
    <input v-model="loginForm.username" name="username"/>
    <input v-model="loginForm.password" name="password"/>
    <button @click="login"></button>
    <p>{{pets}}</p>

  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    name: "main",
    data() {
      return {
        loginForm:{}
      };
    },
    created() {

    },
    methods: {
      ...mapMutations(["CHANGEUSERNAME"]),
      login() {
        console.log("getProducts");
        this.loading = true;
        let _this=this;
        this.$store.dispatch("Login",this.loginForm).then(response => {
          this.loading = false;

          let status=response.status;
          console.log("response",response);
          console.log("status",status)
          if(status==200){
            _this.CHANGEUSERNAME(this.loginForm.username);
            console.log("thisUsername",localStorage.getItem('username'));
            this.$router.push({
              path: "/home",
            });
          }
          // console.log("data",response[0].data);
          // this.pets=response[0].data[0];
          // console.log("pet",this.pets);

        });
      },
      ship(orderId) {}
    }
  };



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
