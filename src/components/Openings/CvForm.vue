<template>
  <div>
    <h5>Cover Letter</h5>
    <div v-if="!fileUploaded">
      <UppyForm className="application-cv-form"/>
    </div>
    <div v-if="fileAdded">
      <RemoveButton :file="file"
                    :fileUploaded="fileUploaded"
                    @remove-file-button-clicked="removeFile"/>
    </div>
  </div>
</template>

<script>
import FileInput from '@uppy/file-input';
import XHRUpload from '@uppy/xhr-upload';

import UppyForm from '@/components/Forms/UppyForm.vue';
import RemoveButton from '@/components/Openings/Applications/RemoveButton.vue';

import uppyFormMixin from '@/mixins/uppyFormMixin';

import '@uppy/core/dist/style.min.css';
import '@uppy/file-input/dist/style.min.css';

export default {
  components: {
    UppyForm,
    RemoveButton,
  },
  created() {
    this.$parent.$on('uploadFiles', () => {
      this.uploadFile();
    });
  },
  mounted() {
    const allowedFileTypes = process.env.VUE_APP_ALLOWED_FILE_TYPES.split(' ');
    const cvUppy = new this.$uppy({
      debug: true,
      autoProceed: false,
      restrictions: {
        maxNumberOfFiles: 1,
        allowedFileTypes,
      },
    });
    cvUppy.use(FileInput, { id: 'CvFileInput', target: '.application-cv-form', replaceTargetContent: true, pretty: false });
    cvUppy.use(XHRUpload, {
      id: 'CVXHRUpload',
      endpoint: process.env.VUE_APP_CV_UPLOAD_ENDPOINT,
      formData: true,
      fieldName: 'file',
    });

    cvUppy.on('file-added', (file) => {
      this.fileAdded = true;
      this.file = file;
      this.$emit('cv-added');
      this.disableFileInput();
    });

    cvUppy.on('upload-success', (file, response) => {
      const uploadedFileData = JSON.stringify(response.body);
      this.cacheUploadedFile('cv', uploadedFileData);

      this.$emit('cv-uploaded');
    });
    this.cvUppy = cvUppy;
    this.setIdForCvInput();
  },
  props: [
    'fileUploaded',
  ],
  data() {
    return {
      cvUppy: null,
      fileAdded: false,
      file: {},
    };
  },
  methods: {
    removeFile() {
      this.cvUppy.removeFile(this.file.id);
      this.fileAdded = false;
      this.enableFileInput();

      this.$emit('cv-removed');
      this.$store.dispatch('applications/resetCvData');
    },
    setIdForCvInput() {
      document.getElementsByClassName('application-cv-form')[0].children[0].getElementsByClassName('uppy-FileInput-input')[0].id = 'id-cv-input';
    },
    disableFileInput() {
      document.getElementById('id-cv-input').disabled = true;
    },
    enableFileInput() {
      document.getElementById('id-cv-input').disabled = false;
    },
    uploadFile() {
      this.cvUppy.upload();
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
