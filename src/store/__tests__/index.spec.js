import store from '..';

describe('store', () => {
  it('should have default state', () => {
    expect(store.state.showAlertBox).toBeFalsy();
    expect(store.state.alertMessage).toBe('');
  });
});
