<script>
import { defineComponent } from "vue";
import { useAuthRegisterStore } from "../stores/register";

export default defineComponent({
  setup() {
    const authRegisterStore = useAuthRegisterStore()

    return {
      authRegisterStore
    }
  },
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
    }
  },
  methods: {
    register() {
      this.authRegisterStore.register(this.email, this.password, this.repeatPassword);
    }
  }
})
</script>

<template>
<!--  <div class="center">
    <div class="auth-form">
      <h1>Get Started!</h1>
      <p class="note">Register your account</p>

      <div v-if="authRegisterStore.$state.error" class="alert alert-danger">{{authRegisterStore.$state.error}}</div>

      <form>
        <div class="input-group">
          <label>Username</label>
          <input v-model="username" id="username" class="form-control" type="text" autocomplete="false">
        </div>

        <div class="input-group">
          <label>Password</label>
          <input v-model="password" id="password" class="form-control" type="password">
        </div>

        <div class="input-group">
          <label>Repeat Password</label>
          <input v-model="repeatPassword" id="repeat_password" class="form-control" type="password">
        </div>
      </form>

      <button v-if="!authRegisterStore.$state.loading" :disabled="username === '' || password === '' || repeatPassword === ''" @click="register" class="btn btn-primary btn-submit">Register</button>
      <div v-else class="spinner-border" style="margin: 1.75rem 0;"></div>
      <br>

      <RouterLink class="link-primary" to="/auth">Already registered</RouterLink>
    </div>
  </div>-->

  <div class="register-page">
    <div class="register-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="/" class="h1"><b>Resume </b>Builder</a>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Register a new membership</p>
          <div v-if="authRegisterStore.$state.error" class="alert alert-danger">{{authRegisterStore.$state.error}}</div>
          <form>
            <div class="input-group mb-3">
              <input v-model="email" id="email" type="email" class="form-control" placeholder="Email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input v-model="password" id="password" type="password" class="form-control" placeholder="Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input v-model="repeatPassword" id="repeat_password" type="password" class="form-control" placeholder="Retype password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                  <label for="agreeTerms">
                    I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>

              <div class="col-4">
                <button v-if="!authRegisterStore.$state.loading" :disabled="email === '' || password === '' || repeatPassword === ''" @click="register"  class="btn btn-primary btn-block">Register</button>
                <div v-else class="spinner-border" style="margin: 1.75rem 0;"></div>
              </div>

            </div>
          </form>
          <RouterLink class="text-center" to="/auth">I already have a membership</RouterLink>
        </div>

      </div>
    </div>
  </div>

</template>
