<script>
import { defineComponent } from "vue";
import { useAuthUserStore } from "../stores/user";

export default defineComponent({
  setup() {
    const authUserStore = useAuthUserStore()

    return {
      authUserStore
    }
  },
  mounted() {
    this.authUserStore.getUserInfo()
  }
})
</script>

<template>
  <div class="box-shadow d-flex vh-100 text-center text-bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Resume Builder</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <RouterLink class="nav-link fw-bold py-1 px-0" aria-current="page" to="/">Home</RouterLink>
            <RouterLink class="nav-link fw-bold py-1 px-0" to="/resumes">Resumes</RouterLink>
            <RouterLink class="nav-link fw-bold py-1 px-0 active" to="/account">Account</RouterLink>
          </nav>
        </div>
      </header>

      <main class="px-3">
        <h1>Account</h1>
        <div v-if="this.authUserStore.id">
          <p class="lead">Email: {{ this.authUserStore.email }}</p>
          <p class="lead">Registration date: {{ (new Date(this.authUserStore.createdAt)).toLocaleString() }}</p>
        </div>
        <div v-else class="spinner-border"></div>

        <p class="lead">
          <button @click="this.authUserStore.logOut()" class="btn btn-lg btn-danger fw-bold border-white bg-danger">Log Out</button>
        </p>
      </main>

      <footer class="mt-auto text-white-50">
        <p>All rights reserved. <a href="https://github.com/tyulyukov/ResumeBuilderVue" class="text-white">Resume Builder</a>, by <a href="https://github.com/tyulyukov" class="text-white">@tyulyukov</a>.</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}

.cover-container {
  max-width: 42em;
}


/*
 * Header
 */

.nav-masthead .nav-link {
  color: rgba(255, 255, 255, .5);
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

</style>