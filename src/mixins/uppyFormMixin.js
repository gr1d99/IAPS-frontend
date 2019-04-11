export default {
  methods: {
    cacheUploadedFile(type, data) {
      switch (type) {
        case 'cv':
          this.$store.dispatch(
            'applications/cacheCvData',
            { data },
          );
          break;
        case 'resume':
          this.$store.dispatch(
            'applications/cacheResumeData',
            { data },
          );
          break;
        default:
          break;
      }
    },
  },
};
