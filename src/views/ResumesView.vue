<script>
import { defineComponent } from "vue";
import { useAuthUserStore } from "../stores/user";
import {useResumeStore} from "../stores/resumes";
import ResumeCard from "../components/ResumeCard.vue";
import AddNewResumeCard from "../components/AddNewResumeCard.vue";

export default defineComponent({
  components: {AddNewResumeCard, ResumeCard},
  setup() {
    const authUserStore = useAuthUserStore()
    const resumeStore = useResumeStore()

    return {
      authUserStore,
      resumeStore
    }
  },
  mounted() {
    this.authUserStore.getUserInfo()
    this.resumeStore.getUserResumes()
  }
})
</script>

<template>
  <div class="box-shadow d-flex h-100 text-center text-bg-dark" style="min-height: 100vh">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Resume Builder</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <RouterLink class="nav-link fw-bold py-1 px-0" aria-current="page" to="/">Home</RouterLink>
            <RouterLink class="nav-link fw-bold py-1 px-0 active" to="/resumes">Resumes</RouterLink>
            <RouterLink class="nav-link fw-bold py-1 px-0" to="/account">Account</RouterLink>
          </nav>
        </div>
      </header>

      <main class="mt-5 px-3 d-block">
        <h1>Resumes</h1>

        <div v-if="!this.resumeStore.loading">
          <div v-if="this.resumeStore.resumes">
            <p class="lead">Resumes: {{ this.resumeStore.resumes.length }}</p>

            <div class="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 g-4" style="max-height: 100%; overflow: auto">
              <ResumeCard v-for="resume in this.resumeStore.resumes"
                          :resume="resume" />

              <AddNewResumeCard />
            </div>
          </div>
        </div>
        <div v-else class="spinner-border"></div>
      </main>
    </div>
  </div>
</template>

<style>
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

.card {
  cursor: pointer;
  overflow: hidden;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>