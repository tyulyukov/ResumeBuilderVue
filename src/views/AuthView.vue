<script>
import { useAuthLoginStore } from "../stores/login";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const authLoginStore = useAuthLoginStore()

    return {
      authLoginStore
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn() {
      this.authLoginStore.logIn(this.email, this.password);
    }
  }
})
</script>

<template>
  <div class="login-page">
    <div class="login-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="/" class="h1"><b>Resume </b>Builder</a>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <div v-if="authLoginStore.$state.error" class="alert alert-danger">{{authLoginStore.$state.error}}</div>
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
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember">
                  <label for="remember">
                    Remember Me
                  </label>
                </div>
              </div>

              <div class="col-4">
                <button v-if="!authLoginStore.$state.loading" :disabled="email === '' || password === ''" @click="logIn" class="btn btn-primary btn-submit">Sign in</button>
                <div v-else class="spinner-border" style="margin: 1.75rem 0;"></div>
              </div>
            </div>
          </form>

          <p class="mb-0">
            <RouterLink class="text-center" to="/signup">Register a new membership</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
