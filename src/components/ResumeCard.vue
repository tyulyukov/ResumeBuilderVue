<script>
import {defineComponent} from "vue";

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
  <div class="col">
    <div class="card bg-dark">
      <img src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/pdf.svg" class="card-img-top" style="padding: 25%!important;" alt="icon">
      <div class="card-body">
        <h4 class="card-title">{{ this.resume.name }}</h4>
      </div>
    </div>
  </div>
</template>