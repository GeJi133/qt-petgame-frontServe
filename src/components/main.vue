<template>
<div class="mainContent">
<!--  <button @click="getPets"></button>-->

<!--  <p style="color: white">{{pets}}</p>-->
<!--  <button >登录</button>-->

  <div class="app-content  content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
      <div class="content-header row">
      </div>
      <div class="content-body">
        <!-- login page start -->
        <section id="auth-login" class="row flexbox-container">

          <div class="col-xl-8 col-md-8 col-11">
<!--            <h1 style="font-size: 100px ;color: white">PPET</h1>-->
            <img @click="routeToLogin"  class="col-xl-8  col-md-4 col-11" src="static/img/ppet.png">
            <img class="col-xl-8 offset-4 col-md-8 col-11" src="static/img/main.png">
<!--            <div class="card bg-authentication mb-0">-->
<!--              <div class="row m-0">-->
<!--                &lt;!&ndash; left section-login &ndash;&gt;-->
<!--                <div class="col-md-6 col-12 px-0">-->
<!--                  <div class="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">-->
<!--                    <div class="card-header pb-1">-->
<!--                      <div class="card-title">-->
<!--                        <h4 class="text-center mb-2">Welcome Back</h4>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="card-content">-->
<!--                      <div class="card-body">-->

<!--                        <div class="divider">-->
<!--                          <div class="divider-text text-uppercase text-muted"><small>or login with-->
<!--                            email</small>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                        <form action="index.html">-->
<!--                          <div class="form-group mb-50">-->
<!--                            <label class="text-bold-600" for="exampleInputEmail1">Email address</label>-->
<!--                            <input type="text" v-model="loginForm.username" class="form-control" id="exampleInputEmail1" placeholder="Email address"></div>-->
<!--                          <div class="form-group">-->
<!--                            <label class="text-bold-600" for="exampleInputPassword1">Password</label>-->
<!--                            <input type="password" v-model="loginForm.password" class="form-control" id="exampleInputPassword1" placeholder="Password">-->
<!--                          </div>-->

<!--                          <div class="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">-->
<!--                            <div class="text-left">-->
<!--                              <div class="checkbox checkbox-sm">-->
<!--                                <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
<!--                                <label class="checkboxsmall" for="exampleCheck1"><small>Keep me logged-->
<!--                                  in</small></label>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                            <div class="text-right"><a href="auth-forgot-password.html" class="card-link"><small>Forgot Password?</small></a></div>-->
<!--                          </div>-->
<!--                        </form>-->
<!--                        <button  @click="login" class="btn btn-primary glow w-100 position-relative">Login<i id="icon-arrow" class="bx bx-right-arrow-alt"></i></button>-->

<!--                        <hr>-->
<!--                        <div class="text-center"><small class="mr-25">Don't have an account?</small><a href="auth-register.html"><small>Sign up</small></a></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash; right section image &ndash;&gt;-->
<!--                <div class="col-md-6 d-md-block d-none text-center align-self-center p-3">-->
<!--                  <div class="card-content">-->
<!--                    &lt;!&ndash;                    <img class="img-fluid" src="../../../app-assets/images/pages/login.png" alt="branding logo">&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </section>
        <!-- login page ends -->
      </div>
    </div>
  </div>
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
