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
                <div v-else class="spinner-border"></div>
              </div>

            </div>
          </form>
          <RouterLink class="text-center" to="/auth">I already have a membership</RouterLink>
        </div>

      </div>
    </div>
  </div>

</template>
