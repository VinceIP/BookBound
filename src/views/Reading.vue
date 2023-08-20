<template>
<div class="book-search">
  <div class="page_header">
      <h1>Find A Book</h1>
      <img
        class="floating"
        src="../assets/images/sharpened-transparent-logo.png"
      />
    </div>
    <div class="content">
    <add-book/>
    </div>
    </div>
</template>

<script>
import AddBook from "../components/AddBook.vue";

export default {
  name: "reading-view",
  components: {
    AddBook,
  },
  methods: {},
};
</script>

<style scoped>
.book-search{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.results {
  background: rgb(254, 209, 113);
  color: rgb(88, 85, 99);
  font-family: "Libre Baskerville";
  text-align: center;
  padding: 15px;
  font-family: "Montserrat", sans-serif;

}

h2 {
  text-align: center;
  font-size: 48px;
}

h3 {
  font-size: 36px;
}

body {
  padding: 25px;
  background: rgba(254, 209, 113, 0.5);
}
</style>