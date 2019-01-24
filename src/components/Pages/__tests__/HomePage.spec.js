import { shallowMount } from '@vue/test-utils';
import HomePage from '../HomePage'; // eslint-disable-line

describe('HomePage', () => {
  it('should render', () => {
    const wrapper = shallowMount(HomePage);
    expect(wrapper.find('h2').text()).toEqual('Industrial Attachment Application System');
  });
});
