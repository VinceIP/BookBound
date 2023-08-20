<template>
  <div>
    <div class="popout-spanner">
      <div class="add-book">
        <div class="popout-panel">
          <div class="search-box">
            <form v-on:submit.prevent="getBook">
              <h3>Search:</h3>
              <div>
                <label for="title">Title</label>
                <input
                  type="radio"
                  name="titleOrIsbn"
                  id="title-button"
                  v-model="selectedOption"
                  value="title"
                  checked
                />
                <label for="isbn">ISBN</label>
                <input
                  type="radio"
                  name="titleOrIsbn"
                  id="isbn-button"
                  v-model="selectedOption"
                  value="isbn"
                />
              </div>
              <div v-if="selectedOption === 'title'">
                <label for="title-input">Title:</label>
                <input
                  type="text"
                  id="title-input"
                  v-model="bookToSearch.searchTerm"
                />
              </div>
              <div v-if="selectedOption === 'isbn'">
                <label for="isbn-input">ISBN:</label>
                <input
                  type="text"
                  id="isbn-input"
                  v-model="bookToSearch.searchTerm"
                />
              </div>
              <button class="selections" type="submit" v-on:click="makeVisible">
                Find Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="popout-spanner">
      <div class="" v-show="showResults">
        <div class="results-grid popout-panel results-panel">
          <book-detail
            v-for="book in this.$store.state.bookResults"
            v-bind:showButton="true"
            v-bind:key="book.isbn"
            v-bind:book="book"
            class="book-card"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bookService from "../services/BookService";
import BookDetail from "./BookDetail.vue";

export default {
  components: { BookDetail },
  name: "add-book",
  data() {
    return {
      showResults: false,
      isbn: 0,
      selectedOption: "title",
      bookToSearch: {
        searchTerm: "",
      },
      bookResults: [],
    };
  },
  methods: {
    getBook() {
      this.resetBookResults();
      const searchTerm = this.bookToSearch.searchTerm;
      if (this.selectedOption == "isbn") {
        bookService.get(searchTerm).then((response) => {
          if (response.status === 200) {
            this.bookResults = [response.data];
            this.$store.commit("ADD_BOOK_RESULTS", this.bookResults);
            this.makeVisible();
          }
        });
      } else {
        bookService.listBooksByTitle(searchTerm).then((response) => {
          if (response.status === 200) {
            this.bookResults = response.data;
            this.$store.commit("ADD_BOOK_RESULTS", this.bookResults);
            this.makeVisible();
          }
        });
      }
    },
    resetBookResults() {
      this.bookResults = [];
      this.showResults = false;
    },
    makeVisible() {
      this.showResults = true;
    },
    addToReading(isbn) {
      bookService.addToReadingList(isbn).then((response) => {
        if (response.status === 200) {
          const username = this.$store.state.user.username;
          this.$router.push({ name: "user-profile", params: { username } });
        }
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");

.add-book {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.popout-panel {
  width: 100%;
  margin: 50px;
}

.results-spanner {
  flex-direction: column;
}
.search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  margin: 0px;
  padding: 0px;
}

.results-grid {
  margin-left: 12%;
  margin-right: 12%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  flex-wrap: wrap;
  padding: 30px;
}

button {
  font-family: sans-serif;
}

input {
  margin: 10px;
}

.selections {
  transition-duration: 0.4s;
  width: 200px;
  height: 60px;
  padding: 12px 28px;
  border: 1px solid rgb(0, 0, 0);
  margin: 50px 30px 40px 30px;
  background-color: rgb(231, 247, 217);
  font-family: "Montserrat", sans-serif;
  color: rgb(48, 46, 49);
  font-weight: bold;
  font-size: 15px;
}

.selections:hover {
  background-color: rgb(115, 147, 126);
}
</style>
