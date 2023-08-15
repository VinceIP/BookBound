import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_REMOTE_API
});

export default {

  list(id) {
    return http.get(`/family/${id}`);
  },

  get(id) {
    return http.get(`/docs/${id}`)
  }

}