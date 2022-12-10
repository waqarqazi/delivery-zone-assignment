import {DRIVER_DATA} from '../types';
const INITIAL_STATE = {
  driverData: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DRIVER_DATA:
      return {...state, driverData: action.payload};

    default:
      return state;
  }
}
