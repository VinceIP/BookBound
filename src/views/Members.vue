<template>
  <div class="members">
    <div class="page_header">
      <h1>Family Dashboard</h1>
      <img
        class="floating"
        src="../assets/images/sharpened-transparent-logo.png"
      />
    </div>

    <div class="content">
      <div class="family-panel" v-if="!isLoading">
        <div class="family-panel-labels">
          <div class="family-panel-label">
            <h1>Stats</h1>
          </div>
          <div class="family-panel-label">
            <h1>Family</h1>
          </div>
          <div class="family-panel-label">
            <h1>Leaderboard</h1>
          </div>
        </div>
        <div class="family-data-panel">
          <family-reading-totals />
        </div>
        <div class="family-data-panel family-members-panel">
          <div
            class="family-member"
            v-for="member in memberResults"
            v-bind:key="member.id"
          >
            <router-link
              v-bind:to="{
                name: 'user-profile',
                params: { username: member.username },
              }"
              >{{ member.username }}</router-link
            >
          </div>
        </div>
        <div class="family-data-panel">
          <the-leaderboard />
        </div>
        <div id="nav">
          <button>
            <router-link v-bind:to="{ name: 'reading' }"> Reading</router-link>
          </button>
          <button>
            <router-link v-bind:to="{ name: 'prize' }"> Prizes </router-link>
          </button>
          <button v-show="isParent">
            <router-link v-bind:to="{ name: 'addmember' }"
              >Add User</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FamilyReadingTotals from "../components/FamilyReadingTotals.vue";
import TheLeaderboard from "../components/TheLeaderboard.vue";
import docsService from "../services/DocsService";

export default {
  name: "members-view",
  components: { FamilyReadingTotals, TheLeaderboard },
  data() {
    return {
      isLoading: true,
      errorMsg: "",
      filterText: "",
      memberResults: [],
    };
  },
  computed: {
    isParent: function () {
      return this.$store.state.user.authorities[0].name != "ROLE_CHILD";
    },
  },
  created() {
    docsService.list(this.$store.state.user.familyId).then((response) => {
      this.memberResults = response.data;
      this.isLoading = false;
    });
  },
};
</script>

<style>
.family-panel {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  column-gap: 15px;
  row-gap: 15px;
  background-color: var(--background-color-popout);
  box-shadow: var(--panel-shadow);
  width: 90%;
  padding: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.family-panel-labels {
  grid-column: 1 / -1;
  display: flex;
}

.family-panel-label {
  width: 100%;
  margin: 0px 25px 0px 65px;
}
.family-panel-label h1 {
  font-family: var(--header-font);
  font-weight: 100;
  font-size: 38px;
  color: var(--font-color);
  padding: 0px;
  margin: 0px;
}

.family-data-panel {
  display: flex;
  background-color: var(--background-color-popout);
  box-shadow: var(--panel-shadow);
  margin: 0px 25px 0px 25px;
  height: 400px;
}

.family-members-panel {
}

.family-member {
  display: flex;
  background-color: var(--background-color-popout);
  box-shadow: var(--panel-shadow);
  margin: 25px;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color-orange);
}

.family-member a {
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  color: rgb(22, 21, 22);
  font-size: 25px;
}

#nav {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
}

button {
  transition-duration: 0.25s;
  border: 1.5px solid var(--background-color-green-dark);
  margin: 50px 30px 40px 30px;
  background-color: var(--background-color-green);
  font-family: "Montserrat", sans-serif;
  color: rgb(88, 85, 99);
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  width: 100px;
  height: 40px;
}

button:hover {
  background-color: var(--background-color-green-light);
}

a {
  text-decoration: none;
  color: var(--font-color);
}

/*-- Mobile --*/
@media (max-width: 500px) {
  .family-panel {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 15px;
    width: 100%;
    padding: 0px;
    margin: 25px 5px 25px 5px;
  }

  .family-panel-labels {
    flex-direction: column;
    align-items: flex-start;
    grid-row: 1 / -1;
    display: flex;
  }

  .family-panel-label {
    order:1;
    width: 100%;
    margin: 0px;
  }
  .family-panel-label h1 {
  }

  .family-data-panel {
    flex-wrap: wrap;
    margin: 0px 0px 0px 10px;
    height: fit-content;
    width: 330px;
    padding: 10px;
    order:2;
  }
  .family-member {
    margin: 15px;
    width: 40%;
    height: 50px;
  }
    .family-panel-label:nth-child(1) { order: 1; }
  .family-panel-label:nth-child(2) { order: 3; }
  .family-panel-label:nth-child(3) { order: 5; }
  .family-data-panel:nth-child(1) { order: 2; }
  .family-data-panel:nth-child(2) { order: 4; }
  .family-data-panel:nth-child(3) { order: 6; }
}
</style>
