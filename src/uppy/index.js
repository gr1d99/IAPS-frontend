import Vue from 'vue';

import Uppy from '@uppy/core';

Vue.mixin({
  beforeCreate() {
    const options = this.$options;
    if (options.uppy) {
      this.$uppy = options.uppy;
    } else if (options.parent && options.parent.$uppy) {
      this.$uppy = options.parent.$uppy;
    }
  },
});

const uppy = Uppy;

export default uppy;
