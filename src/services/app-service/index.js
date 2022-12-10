import client from '../client';
import {API_URLS} from '../url-paths';

const addDriver = obj => {
  return client.post(API_URLS.DRIVER, obj);
};
const getDriverDetails = id => {
  return client.get(`${API_URLS.DRIVER}/${id}`);
};
const updateDriver = (id, obj) => {
  return client.put(`${API_URLS.DRIVER}/${id}`, obj);
};
const deleteDriver = id => {
  return client.delete(`${API_URLS.DRIVER}/${id}`);
};
export const appService = {
  addDriver,
  getDriverDetails,
  updateDriver,
  deleteDriver,
};
