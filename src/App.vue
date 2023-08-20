<template>
  <div id="app" class="app-container">
    <div id="sidemenu">
      <button
        class="sidemenu__btn"
        v-on:click="navOpen = !navOpen"
        v-bind:class="{ active: navOpen }"
      >
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <transition name="translateX">
        <nav v-show="navOpen">
          <div class="sidemenu__wrapper">
            <ul class="sidemenu__list">
              <li class="sidemenu__item">
                <router-link v-bind:to="{ name: 'home' }" @click="closeMenu"
                  >Home</router-link
                >
              </li>
              <li class="sidemenu__item" v-if="!$store.state.token">
                <router-link v-bind:to="{ name: 'login' }" @click="closeMenu"
                  >Login</router-link
                >
              </li>
              <li class="sidemenu__item" v-if="$store.state.token != ''">
                <router-link v-bind:to="{ name: 'logout' }" @click="closeMenu"
                  >Logout</router-link
                >
              </li>
              <li class="sidemenu__item">
                <router-link v-bind:to="{ name: 'members' }" @click="closeMenu"
                  >Dashboard</router-link
                >
              </li>
              <li class="sidemenu__item">
                <router-link v-bind:to="{ name: 'aboutus' }" @click="closeMenu"
                  >About</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    closeMenu() {
      this.navOpen = false;
    },
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content-wrapper {
  flex: 1;
}

#sidemenu nav {
  width: 200px;
  background: var(--background-color-green-mute);
  position: fixed;
  box-shadow: var(--panel-shadow);
  top: 75px;
  left: 0;
  z-index: 99;
}

.sidemenu__btn {
  display: block;
  width: 50px;
  height: 50px;
  background: var(--background-color-green-dark);
  border: 1px solid var(--background-color-green-dark);
  border-radius: 50%;
  position: fixed;
  z-index: 100;
  appearance: none;
  cursor: pointer;
  outline: none;
}

.sidemenu__btn span {
  display: block;
  width: 20px;
  height: 2px;
  margin: auto;
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.4s ease;
}

.sidemenu__btn span.top {
  transform: translateY(-8px);
}

.sidemenu__btn span.bottom {
  transform: translateY(8px);
}

.sidemenu__btn.active .top {
  transform: rotate(-45deg);
}

.sidemenu__btn.active .mid {
  transform: translateX(-20px) rotate(360deg);
  opacity: 0;
}

.sidemenu__btn.active .bottom {
  transform: rotate(45deg);
}

.sidemenu__wrapper {
  padding-top: 50px;
}

.sidemenu__list {
  padding-top: 50px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidemenu__item a {
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.6em;
  padding: 0.5em;
  display: block;
  transition: 0.4s ease;
}

.sidemenu__item a:hover {
  background: var(--background-color-green-light);
  border: 1px solid var(--background-color-green-dark);
}

.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
