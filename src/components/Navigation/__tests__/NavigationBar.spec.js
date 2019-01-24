import { shallowMount } from '@vue/test-utils';
import NavigationBar from '../NavigationBar'; // eslint-disable-line

describe('NavigationBar', () => {
  it('should have correct brand initial', () => {
    const wrapper = shallowMount(NavigationBar);
  });
});
