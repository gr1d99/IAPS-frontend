<template>
  <div>
    <h5>Resume</h5>
    <div v-if="!fileUploaded">
      <UppyForm className="application-resume-form"/>
    </div>
    <div v-if="fileAdded">
      <RemoveFileButton :file="file"
                    :fileUploaded="fileUploaded"
                    :uploadInProgress="uploadInProgress"
                    @remove-file-button-clicked="removeFile"/>
    </div>
  </div>
</template>

<script>
import FileInput from '@uppy/file-input';
import XHRUpload from '@uppy/xhr-upload';

import UppyForm from '@/components/Forms/UppyForm.vue';
import RemoveFileButton from '@/components/Application/Buttons/RemoveFileButton.vue';

import uppyFormMixin from '@/mixins/uppyFormMixin';

export default {
  components: {
    UppyForm,
    RemoveFileButton,
  },
  created() {
    this.$parent.$on('uploadFiles', () => {
      this.uploadFile();
    });
  },
  mounted() {
    const allowedFileTypes = process.env.VUE_APP_ALLOWED_FILE_TYPES.split(' ');

    const resumeUppy = new this.$uppy({
      debug: true,
      autoProceed: false,
      restrictions: {
        maxNumberOfFiles: 1,
        allowedFileTypes,
      },
    });
    resumeUppy.use(FileInput, {
      id: 'ResumeFileInput',
      target: '.application-resume-form',
      replaceTargetContent: true,
      pretty: false,
    });
    resumeUppy.use(XHRUpload, {
      id: 'ResumeXHRUpload',
      endpoint: process.env.VUE_APP_RESUME_UPLOAD_ENDPOINT,
      formData: true,
      fieldName: 'file',
    });

    resumeUppy.on('file-added', (file) => {
      this.fileAdded = true;
      this.file = file;
      this.$emit('resume-added');
      this.disableFileInput();
    });

    resumeUppy.on('upload-success', (file, response) => {
      const uploadedFileData = JSON.stringify(response.body);
      this.cacheUploadedFile('resume', uploadedFileData);

      this.$emit('resume-uploaded');
    });
    this.resumeUppy = resumeUppy;
    this.setIdForResumeInput();
  },
  props: [
    'fileUploaded',
    'uploadInProgress',
  ],
  data() {
    return {
      resumeUppy: null,
      fileAdded: false,
      file: {},
    };
  },
  methods: {
    removeFile() {
      this.resumeUppy.removeFile(this.file.id);
      this.fileAdded = false;
      this.enableFileInput();

      this.$emit('resume-removed');
      this.$store.dispatch('applications/resetResumeData');
    },
    setIdForResumeInput() {
      document.getElementsByClassName('application-resume-form')[0].children[0].getElementsByClassName('uppy-FileInput-input')[0].id = 'id-resume-input';
    },
    disableFileInput() {
      document.getElementById('id-resume-input').disabled = true;
    },
    enableFileInput() {
      document.getElementById('id-resume-input').disabled = false;
    },
    uploadFile() {
      this.resumeUppy.upload();
    },
  },
  mixins: [uppyFormMixin],
};
</script>

<style lang="scss" scoped>
  h5 {
    font-size: 1em;
  }
</style>
