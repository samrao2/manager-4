import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
    //the below is not an array but a key interpolation from ES6
    return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
