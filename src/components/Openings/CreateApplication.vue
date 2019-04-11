<template>
    <div class="col-md-6 offset-md-3 mt-5">
      <span>Step {{ cvData && resumeData ? '2' : '1' }} of 2</span>
      <div class="alert alert-danger upload-error-box"
           role="alert"
           v-show="hasErrors">
        <ul class="errors">
          <li class="error-item"
              v-for="(error, index) in Object.values(errors).flat()"
              :key="index">{{error}}</li>
        </ul>
      </div>

      <div>
        <div class="cv p-2 border">
          <CvForm/>
        </div>
        <div class="resume p-2 mt-2 border">
          <ResumeForm/>
        </div>
        <div v-if="cvData && resumeData">
          <button class="btn btn-primary btn-sm mt-2" @click="submitApplication">Submit Application</button>
        </div>
        <div v-else>
          <button class="btn btn-primary btn-sm mt-2" @click="uploadFiles">Upload Files</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { DONE_TYPE, WAITING_TYPE } from '@/constants/async_types';
import { APPLICATION_CREATED } from '@/constants/messages';

import api from '@/api';
import Applications from '@/services/applications';

import ResumeForm from '@/components/Openings/ResumeForm.vue';
import CvForm from '@/components/Openings/CvForm.vue';

export default {
  name: 'CreateApplication',
  mounted() {
    this.$store.dispatch('setAppLoading', WAITING_TYPE);
    const openingId = this.$route.params.id;
    api.head(`/openings/${openingId}`)
      .then(() => {
        this.$store.dispatch('setAppLoading', DONE_TYPE);
      })
      .catch((error) => {
        if (error.response.status) {
          const { status } = error.response;
          if (status === 404) {
            this.$store.dispatch('setAppLoading', DONE_TYPE);
            this.$router.push({ name: 'ShowOpening', params: { id: openingId } });
          }
        }
      });
  },
  data() {
    return {
      errors: {},
    };
  },
  computed: {
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
    ...mapGetters('applications', ['cvData', 'resumeData']),
  },
  components: {
    ResumeForm,
    CvForm,
  },
  methods: {
    uploadFiles() {
      this.$emit('uploadFiles');
    },
    submitApplication() {
      this.$store.dispatch('setAppLoading', WAITING_TYPE);

      const openingId = this.$route.params.id;

      const data = {
        resume_data: this.$store.state.applications.resumeData,
        cover_letter_data: this.$store.state.applications.cvData,
      };

      Applications.create(openingId, data).then(() => {
        this.$store.dispatch('setAppLoading', DONE_TYPE);
        this.$store.dispatch('addNotification', [APPLICATION_CREATED]);
        this.$store.dispatch('applications/resetCvData');
        this.$store.dispatch('applications/resetResumeData');
        this.$router.push({ name: 'ShowOpening', params: { id: openingId } });
      }).catch((error) => {
        if (error.response.status) {
          const { status } = error.response;

          if (status === 422) {
            this.$store.dispatch('setAppLoading', DONE_TYPE);
            this.errors = error.response.data.errors;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .upload-error-box {
    padding-bottom: 0;
  }
  .errors {
    padding-left: 0;
  }
  .error-item {
    list-style: none;
    font-size: 12px;
  }
</style>
