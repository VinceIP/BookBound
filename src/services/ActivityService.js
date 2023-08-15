import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_REMOTE_API +"/user"
});

export default {
    getUserReadingActivity(username) {
        return http.get(`/${username}/activity`);
    },

    create(activity, username) {
        return http.post(`/${username}/activity`, activity);
    },

    getTotalMinutesReadPerUser(username) {
        return http.get(`/${username}/activity/total`);
    },

    getTotalMinutesReadPerFamily(id) {
        return http.get(`/members/${id}/activity`);
    },
    
    getLeaderboard(id) {
        return http.get(`/leaderboard/${id}`);
    }
  }