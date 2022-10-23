<script>
import {defineComponent} from "vue";
import {useResumeStore} from "../stores/resumes";

export default defineComponent({
  setup() {
    const resumeStore = useResumeStore()

    return {
      resumeStore
    }
  },
  props: {
    resume: {
      type: Object,
      required: true
    }
  },
})
</script>

<template>
  <div class="col">
    <div class="card text-center bg-dark">
      <img src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/pdf.svg" class="card-img-top" style="padding: 25%!important;" alt="icon">
      <div class="card-body">
        <h5 class="card-title">{{ this.resume.name }}</h5>
      </div>
      <div class="card-footer">
        <a @click="this.resumeStore.download(this.resume.id, this.resume.name)" href="#" class="btn btn-primary">Download</a>
        <a @click="this.resumeStore.delete(this.resume.id)" href="#" class="btn btn-danger mt-2">Delete</a>
      </div>
    </div>
  </div>
</template>