import axios from 'axios'
const API_VERSION = process.env.VUE_APP_LOCALPROD_API_VERSION !== undefined ? process.env.VUE_APP_LOCALPROD_API_VERSION : "1";

let axiosModified = axios.create({
  baseURL: process.env.VUE_APP_LOCALPROD_API_BASE_URL !== undefined ? `${process.env.VUE_APP_LOCALPROD_API_BASE_URL}/v${API_VERSION}` : "",
  cancelToken: null
});
/*
 * Set default headers here:
 */
axiosModified.defaults.headers.common["Content-Type"] = "application/json";
// handle when refresh token expired 
axiosModified.interceptors.response.use((response) => response, (error) => {
  const statusCode = error.response ? error.response.status : null
  if (statusCode === 401) {
    $nuxt.$emit('signOut')
  } else {
    throw error
  }
});

const axiosAuthModified = axiosModified;

export { axiosModified, axiosAuthModified };
