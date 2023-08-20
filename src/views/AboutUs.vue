<template>
  <div class="about-us">
    <div class="page_header">
      <h1>The BookBound Team</h1>
      <img
        class="floating"
        src="../assets/images/sharpened-transparent-logo.png"
      />
    </div>
    <div class="content">
      <div class="profile_container">
        <div class="profile">
          <img src="../assets/images/Ava.jpg" />
          <p class="name">Ava Lindstrom</p>
          <a href="https://www.linkedin.com/in/ava-lindstrom/"
            ><i class="fa fa-linkedin-square" style="font-size: 24px"></i>
            LinkedIn</a
          >
          <div class="rounded_panel">
            <p>
              Coding enthusiast, crossword puzzler, and comic book fanatic.
              Vegetarian bruncher, omnivorous reader. Likely on a train right
              now.
            </p>
          </div>
          <div class="rounded_panel location_panel">
            <p class="location"> Chicago, IL</p>
          </div>
        </div>
        <div class="profile">
          <img src="../assets/images/Nova.jpg" />
          <p class="name">Nova Widdifield</p>
          <a href="https://www.linkedin.com/in/nova-widdifield/"
            ><i class="fa fa-linkedin-square" style="font-size: 24px"></i>
            LinkedIn</a
          >
          <div class="rounded_panel">
            <p>
              Lover of animals, art enthusiast, and co-parent of Noodle the
              pampered poodle. Changed careers to become an avid CSS enjoyer.
            </p>
          </div>
          <div class="rounded_panel location_panel">
            <p class="location"> Aurora, CO</p>
          </div>
        </div>
        <div class="profile">
          <img src="../assets/images/Vince.jpg" />
          <p class="name">Vince Patterson</p>
          <a href="https://www.linkedin.com/in/vincent-patterson/"
            ><i class="fa fa-linkedin-square" style="font-size: 24px"></i>
            LinkedIn</a
          >
          <div class="rounded_panel">
            <p>
              Cat father of 2 rapscallions. Web devloper, flavored water
              drinker, statically-typed language enjoyer, and part-time aspiring
              guitarist.
            </p>
          </div>
          <div class="rounded_panel location_panel">
            <p class="location"> Springfield, OH</p>
          </div>
        </div>
        <div class="profile">
          <img src="../assets/images/Blake.jpg" />
          <p class="name">Blake Prather</p>
          <a href="https://www.linkedin.com/in/blake-c-prather/"
            ><i class="fa fa-linkedin-square" style="font-size: 24px"></i>
            LinkedIn</a
          >
          <div class="rounded_panel">
            <p>
              Father to three awesome little boys. Husband to Cera. Career
              changer from State Trooper to software developer. Outdoorsy.
              Novice gardener.
            </p>
          </div>
          <div class="rounded_panel location_panel">
            <p class="location"> Delaware, OH</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-us",
};
</script>

<style scoped>
.about-us{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile_container {
  display: flex;
  margin-top: 50px;
  width: 80%;
}

.profile {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  text-decoration: none;
  color: black;
}
i {
  color: cornflowerblue;
}

img {
  border-radius: 50%;
}

.name {
  font-family: "Socake", sans-serif;
  font-size: 36px;
  margin: 0 auto;
}

.location{
  font-style: italic;
  text-align: center;
  transform: translate(0px, -10px);
}

.profile img {
  width: 300px;
  border: black;
  border-width: 5px;
  border-style: solid;
}

.rounded_panel {
  width: 80%;
  height: 130px;
  padding:5px;
  margin:5px;
}

.location_panel{
  height:50px;
  padding:0px;
}



/* -- Mobile Large/landscape -- */
@media (min-width: 501px) and (max-width: 1000px) {
  .profile_container {
  display: flex;
  flex-wrap:wrap;
  margin-top: 50px;
  width: 100%;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-bottom: 25px;
}



}

/*-- Mobile Small -- */

@media (max-width: 500px) {
  .profile_container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 100%;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
}



}
</style>
