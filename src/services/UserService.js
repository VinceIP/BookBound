import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_REMOTE_API
});

export default {

    add(user) {
      return axios.post('/user', user)
    },
  
    update(user) {
      return http.put(`/user/${user.username}`, user);
    }
  
  }