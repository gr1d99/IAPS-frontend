import mutations from '../modules/global/mutations';

const { showAlertMessage, clearAlertMessage } = mutations;

describe('mutations', () => {
  it('should show alert box', () => {
    const message = 'alert message';
    const state = {
      showAlertBox: false,
      alertMessage: '',
    };

    showAlertMessage(state, message);

    expect(state.showAlertBox).toBeTruthy();
    expect(state.alertMessage).toBe(message);
  });

  it('should clear alert message', () => {
    const message = 'alert message';
    const state = {
      showAlertBox: true,
      alertMessage: message,
    };

    clearAlertMessage(state);

    expect(state.showAlertBox).toBeFalsy();
    expect(state.alertMessage).toBe('');
  });
});
