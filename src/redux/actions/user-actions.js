import {DRIVER_DATA, EVENT_FAILURE} from '../types';
import {API_URLS} from 'services/url-paths';
import client from '../../services/client';

export const getDriverData = () => async dispatch => {
  try {
    const res = await client.get(API_URLS.DRIVER);
    console.log('res.data', res);
    dispatch({
      type: DRIVER_DATA,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: EVENT_FAILURE,
      payload: console.log(e),
    });
  }
};
