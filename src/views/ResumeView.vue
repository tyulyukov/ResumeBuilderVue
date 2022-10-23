<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    resume: {
      type: Object,
      required: true
    }
  }
})
</script>

<template>
  <div class="container py-3">
    <form class="row g-3">
      <h2>New resume</h2>

      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Resume Name</label>
        <input v-model="this.resume.name" type="text" class="form-control" id="inputEmail4">
      </div>
      <div class="col-12">
        <label for="inputPassword4" class="form-label">About me</label>
        <textarea v-model="this.resume.description" class="form-control" id="inputPassword4"></textarea>
      </div>

      <h2>Contact Information</h2>

      <div class="col-md-6">
        <label for="inputAddress" class="form-label">First Name</label>
        <input v-model="this.resume.contactInformation.firstName" type="text" class="form-control" id="inputAddress">
      </div>
      <div class="col-md-6">
        <label for="inputAddress2" class="form-label">Last Name</label>
        <input v-model="this.resume.contactInformation.lastName" type="text" class="form-control" id="inputAddress2">
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Email</label>
        <input v-model="this.resume.contactInformation.email" type="email" class="form-control" id="inputCity">
      </div>
      <div class="col-md-6">
        <label for="inputCity2" class="form-label">Phone Number</label>
        <input v-model="this.resume.contactInformation.phone" type="text" class="form-control" id="inputCity2">
      </div>

      <h2>Educations</h2>

      <ol class="col-12 list-group list-group-numbered">
        <li v-for="education in this.resume.educations" class="list-group-item">
          <br>

          <label for="inputCity12" class="form-label">Institution</label>
          <input v-model="education.institution" type="text" class="form-control" id="inputCity12">

          <label for="inputCity32" class="form-label">Degree</label>
          <input v-model="education.degree" type="text" class="form-control" id="inputCity32">

          <label for="inputCity33" class="form-label">Description</label>
          <textarea v-model="education.description" class="form-control" id="inputCity33"></textarea>
        </li>
      </ol>

      <h2>Skills</h2>

      <ol class="col-12 list-group list-group-numbered">
        <li v-for="skill in this.resume.skills" class="list-group-item">
          <br>

          <label for="inputCity45" class="form-label">Name</label>
          <input v-model="skill.name" type="text" class="form-control" id="inputCity45">
        </li>
      </ol>

      <h2>Languages</h2>

      <ol class="col-12 list-group list-group-numbered">
        <li v-for="language in this.resume.languages" class="list-group-item">
          <br>

          <label for="inputCity14" class="form-label">Name</label>
          <input v-model="language.name" type="text" class="form-control" id="inputCity14">

          <label for="inputCity95" class="form-label">Level</label>
          <input v-model="language.level" type="text" class="form-control" id="inputCity95">
        </li>
      </ol>

      <div class="col-12">
        <button @click.prevent="this.createResumeStore.create" class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>