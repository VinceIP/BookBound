<template>
  <div class="add-member">
    <h1 class="header">Please Add Your Family Member!</h1>
    <add-form />
    <p class="running_board">
      📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕
      📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓📕 📙
      📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓
    </p>
  </div>
</template>

<script>
import addForm from "../components/AddForm";

export default {
  components: {
    addForm,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,600&display=swap");

.header {
  font-family: "Montserrat", sans-serif;
}

.addMember {
  background: rgb(115, 147, 126);
}

.header {
  background: rgb(115, 147, 126);
  margin: 0px auto 60px auto;
  text-align: center;
  padding-top: 30px;
  color: rgb(59, 57, 66);
}

.members_form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: baseline;
  background: rgb(115, 147, 126);
}

.form-input-group {
  display: flex;
  border: solid, 1px, black;
  margin-bottom: 1rem;
  color: rgb(59, 57, 66);
  font-weight: bold;
  font-size: 20px;
}

.add_label {
  font-family: "Montserrat", sans-serif;
}

.behind_form_text {
  background: rgba(232, 123, 31, 0.8);
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: flex-start;
  width: 900px;
  height: 350px;
  justify-content: space-between;
  border-radius: 8px;
  border: solid 3px rgb(182, 90, 10);
}

.running_board {
  display: flex;
  background: rgb(115, 147, 126);
  height: 95px;
  margin: 300px 0 0 0;
}

.add-member-button {
  transition-duration: 0.4s;
  border: 1px solid rgb(182, 90, 10);
  margin: 50px 30px 40px 30px;
  background-color: rgb(248, 150, 64);
  font-family: "Montserrat", sans-serif;
  color: rgb(88, 85, 99);
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  width: 100px;
  height: 40px;
}

.add-member-button:hover {
  background-color: rgb(182, 90, 10);
}</style>