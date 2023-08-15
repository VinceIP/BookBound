import axios from 'axios';

const http = axios.create({
  baseURL: "127.0.0.1/book"
});

export default {

  listBooksByTitle(title) {
    return http.get(`/title=${title}`);
  },

  listBooksByPublisher(publisher) {
    return http.get(`/publisher=${publisher}`);
  },

  get(isbn) {
    return http.get(`/isbn=${isbn}`);
  },

  addToReadingList(isbn, username){
    return http.post(`/isbn=${isbn}?username=${username}`);
  },

  delete(isbn){
    return http.delete(`/books/${isbn}`);
  }

}