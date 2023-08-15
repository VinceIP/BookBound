import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_REMOTE_API + "/prize"
});

export default {

  //List prizes for group type - both/child/parent
  listPrizesByUserGroup(userGroup) {
    return http.get(`/${userGroup}`);
  },
  listAllPrizes() {
    return http.get();
  },

  addToPrizeList(prize){
    return http.post('/', prize);
  },

  getPrizesEarned(username, finished){
    return http.get(`/prize/${username}`, finished);
  },

  deletePrize(prizeName){
    return http.delete(`/name/${prizeName}`);
  }

}