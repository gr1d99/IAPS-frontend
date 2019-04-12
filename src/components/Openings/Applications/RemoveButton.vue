<template>
  <div class="d-flex flex-row">
    <span>{{ file.name }}</span>
    <button type="button" class="pl-2 close" aria-label="Close" @click="removeFile" v-if="!fileUploaded">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  props: [
    'file',
    'fileUploaded',
  ],
  methods: {
    removeFile() {
      this.$emit('remove-file-button-clicked');
    },
  },
};
</script>
