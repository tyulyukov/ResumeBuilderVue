<script>
import { defineComponent } from "vue";
import { useCreateResumeStore } from "../stores/create";

export default defineComponent({
  setup() {
    const createResumeStore = useCreateResumeStore()

    return {
      createResumeStore
    }
  },
  methods: {
    addNewSkill() {
      this.createResumeStore.resume.skills.push({ })
    },
    addNewEducation() {
      this.createResumeStore.resume.educations.push({ })
    },
    addNewLanguage() {
      this.createResumeStore.resume.languages.push({ })
    },
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
            <RouterLink class="nav-link fw-bold py-1 px-0" to="/resumes">Resumes</RouterLink>
            <RouterLink class="nav-link fw-bold py-1 px-0" to="/account">Account</RouterLink>
          </nav>
        </div>
      </header>

      <main class="mt-5 px-3 d-block">
        <div class="text-bg-dark h-100" style="min-height: 100vh">
          <div class="container py-3">
            <form class="row g-3">
              <h2>New resume</h2>

              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Resume Name</label>
                <input v-model="this.createResumeStore.resume.name" type="text" class="form-control text-bg-dark" id="inputEmail4">
              </div>
              <div class="col-12">
                <label for="inputPassword4" class="form-label">About me</label>
                <textarea v-model="this.createResumeStore.resume.description" class="form-control text-bg-dark" id="inputPassword4"></textarea>
              </div>

              <h2>Contact Information</h2>

              <div class="col-md-6">
                <label for="inputAddress" class="form-label">First Name</label>
                <input v-model="this.createResumeStore.resume.contactInformation.firstName" type="text" class="form-control text-bg-dark" id="inputAddress">
              </div>
              <div class="col-md-6">
                <label for="inputAddress2" class="form-label">Last Name</label>
                <input v-model="this.createResumeStore.resume.contactInformation.lastName" type="text" class="form-control text-bg-dark" id="inputAddress2">
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">Email</label>
                <input v-model="this.createResumeStore.resume.contactInformation.email" type="email" class="form-control text-bg-dark" id="inputCity">
              </div>
              <div class="col-md-6">
                <label for="inputCity2" class="form-label">Phone Number</label>
                <input v-model="this.createResumeStore.resume.contactInformation.phone" type="text" class="form-control text-bg-dark" id="inputCity2">
              </div>
              <div class="col-md-6">
                <label for="inputCity32" class="form-label">Country</label>
                <input v-model="this.createResumeStore.resume.contactInformation.country" type="text" class="form-control text-bg-dark" id="inputCity32">
              </div>
              <div class="col-md-6">
                <label for="inputCity72" class="form-label">City</label>
                <input v-model="this.createResumeStore.resume.contactInformation.city" type="text" class="form-control text-bg-dark" id="inputCity72">
              </div>

              <h2>Educations</h2>

              <ol class="col-12 list-group list-group-numbered">
                <li v-for="education in this.createResumeStore.resume.educations" class="list-group-item bg-dark">
                  <br>

                  <label for="inputCity12" class="form-label">Institution</label>
                  <input v-model="education.institution" type="text" class="form-control text-bg-dark" id="inputCity12">

                  <label for="inputCity32" class="form-label">Degree</label>
                  <input v-model="education.degree" type="text" class="form-control text-bg-dark" id="inputCity32">

                  <label for="inputCity33" class="form-label">Description</label>
                  <textarea v-model="education.description" class="form-control text-bg-dark" id="inputCity33"></textarea>
                </li>
              </ol>
              <div class="col-12">
                <button @click.prevent="this.addNewEducation" class="btn btn-link">+ Add</button>
              </div>

              <h2>Skills</h2>

              <ol class="col-12 list-group list-group-numbered">
                <li v-for="skill in this.createResumeStore.resume.skills" class="list-group-item bg-dark">
                  <br>

                  <label for="inputCity45" class="form-label">Name</label>
                  <input v-model="skill.name" type="text" class="form-control text-bg-dark" id="inputCity45">
                </li>
              </ol>
              <div class="col-12">
                <button @click.prevent="this.addNewSkill" class="btn btn-link">+ Add</button>
              </div>

              <h2>Languages</h2>

              <ol class="col-12 list-group list-group-numbered">
                <li v-for="language in this.createResumeStore.resume.languages" class="list-group-item bg-dark">
                  <br>

                  <label for="inputCity14" class="form-label">Name</label>
                  <input v-model="language.name" type="text" class="form-control text-bg-dark" id="inputCity14">

                  <label for="inputCity95" class="form-label">Level</label>
                  <input v-model="language.level" type="text" class="form-control text-bg-dark" id="inputCity95">
                </li>
              </ol>
              <div class="col-12">
                <button @click.prevent="this.addNewLanguage" class="btn btn-link">+ Add</button>
              </div>

              <div class="col-12">
                <button @click.prevent="this.createResumeStore.create" class="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
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