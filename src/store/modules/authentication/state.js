import Vue from '../../../jwt';

export default {
  token: Vue.$jwt.getToken(),
};
