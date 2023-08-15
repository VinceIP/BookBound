/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2743:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__(7727);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7d04773c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('nav', {
    attrs: {
      "role": "navigation"
    }
  }, [_c('div', {
    attrs: {
      "id": "menuToggle"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  }), _c('span'), _c('span'), _c('span'), _c('ul', {
    attrs: {
      "id": "menu"
    }
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'home'
      }
    },
    on: {
      "click": _vm.closeMenu
    }
  }, [_vm._v("Home")]), _c('br'), _c('router-link', {
    attrs: {
      "to": {
        name: 'members'
      }
    },
    on: {
      "click": _vm.closeMenu
    }
  }, [_vm._v("Members")]), _c('br'), !_vm.$store.state.token ? _c('router-link', {
    attrs: {
      "to": {
        name: 'login'
      }
    }
  }, [_vm._v("Login")]) : _vm._e(), _vm.$store.state.token != '' ? _c('router-link', {
    attrs: {
      "to": {
        name: 'logout'
      }
    },
    on: {
      "click": _vm.closeMenu
    }
  }, [_vm._v("Logout")]) : _vm._e(), _c('br'), _c('router-link', {
    attrs: {
      "to": {
        name: 'aboutus'
      }
    },
    on: {
      "click": _vm.closeMenu
    }
  }, [_vm._v("About Us")])], 1)])]), _c('router-view')], 1);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
/* harmony default export */ const Appvue_type_script_lang_js_ = ({
  methods: {
    closeMenu: function closeMenu() {
      var checkbox = document.querySelector("#menuToggle input");
      checkbox.checked = false;
    }
  },
  watch: {
    $route: function $route() {
      this.closeMenu();
    }
  }
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ const src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7d04773c&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=7d04773c&prod&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/App.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7d04773c",
  null
  
)

/* harmony default export */ const App = (component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__(5212);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(8345);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Home.vue?vue&type=template&id=1a4d8147&scoped=true&
var Homevue_type_template_id_1a4d8147_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "home"
  }, [_vm._m(0), _c('logo-slider', [_c('div', {
    staticClass: "slideshow"
  }, [_c('img', {
    attrs: {
      "id": "slides",
      "src": __webpack_require__(6198)
    }
  }), _c('img', {
    attrs: {
      "id": "slides",
      "src": __webpack_require__(530)
    }
  }), _c('img', {
    attrs: {
      "id": "slides",
      "src": __webpack_require__(1835)
    }
  }), _c('img', {
    attrs: {
      "id": "slides",
      "src": __webpack_require__(4222)
    }
  })]), _c('div', {
    staticClass: "slideshow"
  }, [_c('img', {
    attrs: {
      "id": "slides",
      "src": __webpack_require__(6198)
    }
  }), _c('img', {
    attrs: {
      "id": "slides",
      "src": __webpack_require__(530)
    }
  }), _c('img', {
    attrs: {
      "id": "slides",
      "src": __webpack_require__(1835)
    }
  }), _c('img', {
    attrs: {
      "id": "slides",
      "src": __webpack_require__(4222)
    }
  })])]), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5), _vm._m(6), _vm._m(7), _vm._m(8)], 1);
};
var Homevue_type_template_id_1a4d8147_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "title"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("BookBound: Discover the Power of Stories Together!")]), _c('img', {
    staticClass: "title-logo",
    attrs: {
      "src": __webpack_require__(9626)
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product_details"
  }, [_c('h1', [_vm._v(" Get ready for an incredible family reading program that's all about fun and togetherness! It's specially designed for both kids and parents, so the whole family can dive into the magic of reading. Imagine being whisked away to amazing worlds through captivating stories and vibrant illustrations. But that's not all - this program is packed with exciting surprises! You can challenge your family to friendly reading contests and win fantastic prizes. It's like a thrilling race to see who can read the most books or explore the most adventurous tales. And the best part? You'll be cheering each other on and celebrating as a team. It's a fantastic way to bond with your family and create lasting memories. So get ready to embark on this extraordinary reading adventure together, where stories come to life and joy fills the air! ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "book_covers"
  }, [_c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(1505),
      "alt": "winnie the pooh"
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(6520),
      "alt": "alice in wonderland"
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(8779),
      "alt": "dracula"
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(6316),
      "alt": "anne of green gables"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product_details"
  }, [_c('h1', [_vm._v(" Gone are the days of scattered reading logs and forgotten book lists. Our family reading tracking website offers a centralized hub where every family member can create their personal profiles, add books to their reading lists, and track their progress. This interactive and personalized experience makes reading a shared journey, fostering a sense of camaraderie and healthy competition among family members. ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "book_covers"
  }, [_c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(3886),
      "alt": "frankie"
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(7019),
      "alt": "great gatbsy"
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(9315),
      "alt": "wizard of oz"
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(81),
      "alt": "gulliver's traavels"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product_details"
  }, [_c('h1', [_vm._v(" This family reading program that parents can also use brings numerous benefits for both children and parents alike. It promotes a positive reading environment at home, encouraging a love for books and fostering literacy skills in children. By engaging in shared reading activities, parents can actively participate and bond with their children over stories, creating cherished moments together. Additionally, the program provides access to a wide range of age-appropriate content, ensuring that children are exposed to suitable material. This empowers parents to feel confident that their kids are exploring books that align with their developmental stage. Moreover, the program offers an opportunity for families to spend quality time together, enjoying the wonders of storytelling and strengthening their connections. Overall, a family reading program that includes parents is a fantastic way to cultivate a love for reading, promote family togetherness, and spark lifelong learning in children. ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "book_covers"
  }, [_c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(2662),
      "alt": ""
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(9525),
      "alt": ""
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(7125),
      "alt": ""
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(1874),
      "alt": ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product_details"
  }, [_c('h1', [_vm._v(" If you're ready for epic tales, incredible friendships, and the thrill of reading, join us on this amazing journey. Let's explore the wonderful world of books together! ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "book_covers"
  }, [_c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(7457),
      "alt": "dorian gray"
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(9749),
      "alt": "odyessy"
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(3779),
      "alt": "velvateen rabbit"
    }
  }), _c('img', {
    attrs: {
      "id": "bookcover",
      "src": __webpack_require__(9201),
      "alt": "wuthering heights"
    }
  })]);
}];

;// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=template&id=1a4d8147&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js&
/* harmony default export */ const Homevue_type_script_lang_js_ = ({
  name: "home-view"
});
;// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Home.vue?vue&type=style&index=0&id=1a4d8147&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=style&index=0&id=1a4d8147&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/views/Home.vue



;


/* normalize component */

var Home_component = (0,componentNormalizer/* default */.Z)(
  views_Homevue_type_script_lang_js_,
  Homevue_type_template_id_1a4d8147_scoped_true_render,
  Homevue_type_template_id_1a4d8147_scoped_true_staticRenderFns,
  false,
  null,
  "1a4d8147",
  null
  
)

/* harmony default export */ const Home = (Home_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Login.vue?vue&type=template&id=088be0e1&scoped=true&
var Loginvue_type_template_id_088be0e1_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "login"
    }
  }, [_c('h1', {
    staticClass: "welcome"
  }, [_vm._v(" Welcome! Please Log In! "), _c('div', {
    staticClass: "logo"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(9626)
    }
  })])], 1)]), _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.login.apply(null, arguments);
      }
    }
  }, [_vm.invalidCredentials ? _c('div', {
    staticClass: "alert",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v(" Invalid username and password! ")]) : _vm._e(), this.$route.query.registration ? _c('div', {
    staticClass: "alert",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v(" Thank you for registering, please sign in. ")]) : _vm._e(), _c('div', {
    staticClass: "background_for_image"
  }, [_c('div', {
    staticClass: "all-input"
  }, [_c('div', {
    staticClass: "form-input-group",
    attrs: {
      "id": "username"
    }
  }, [_c('label', {
    attrs: {
      "for": "username"
    }
  }, [_vm._v("👤 Username")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.username,
      expression: "user.username"
    }],
    attrs: {
      "type": "text",
      "id": "username",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": _vm.user.username
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "username", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group",
    attrs: {
      "id": "password"
    }
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("🔒 Password")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password,
      expression: "user.password"
    }],
    attrs: {
      "type": "password",
      "id": "password",
      "required": ""
    },
    domProps: {
      "value": _vm.user.password
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "password", $event.target.value);
      }
    }
  })]), _c('button', {
    staticClass: "signin-button",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Sign in")]), _c('p', [_c('router-link', {
    staticClass: "signup",
    attrs: {
      "to": {
        name: 'register'
      }
    }
  }, [_vm._v("Need an account? Sign up.")])], 1)]), _vm._m(0)])])]);
};
var Loginvue_type_template_id_088be0e1_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "running-board"
  }, [_c('p', [_vm._v(" 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 ")])]);
}];

;// CONCATENATED MODULE: ./src/views/Login.vue?vue&type=template&id=088be0e1&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/services/AuthService.js

/* harmony default export */ const AuthService = ({
  login: function login(user) {
    return axios_default().post('/login', user);
  },
  register: function register(user) {
    return axios_default().post('/register', user);
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Login.vue?vue&type=script&lang=js&


/* harmony default export */ const Loginvue_type_script_lang_js_ = ({
  name: "login-view",
  components: {},
  data: function data() {
    return {
      user: {
        username: "",
        password: ""
      },
      invalidCredentials: false
    };
  },
  methods: {
    login: function login() {
      var _this = this;
      AuthService.login(this.user).then(function (response) {
        if (response.status == 200) {
          _this.$store.commit("SET_AUTH_TOKEN", response.data.token);
          _this.$store.commit("SET_USER", response.data.user);
          _this.$router.push({
            path: "/members"
          });
        }
      })["catch"](function (error) {
        var response = error.response;
        if (response.status === 401) {
          _this.invalidCredentials = true;
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/views/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Login.vue?vue&type=style&index=0&id=088be0e1&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Login.vue?vue&type=style&index=0&id=088be0e1&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/views/Login.vue



;


/* normalize component */

var Login_component = (0,componentNormalizer/* default */.Z)(
  views_Loginvue_type_script_lang_js_,
  Loginvue_type_template_id_088be0e1_scoped_true_render,
  Loginvue_type_template_id_088be0e1_scoped_true_staticRenderFns,
  false,
  null,
  "088be0e1",
  null
  
)

/* harmony default export */ const Login = (Login_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Logout.vue?vue&type=template&id=f1d56630&
var Logoutvue_type_template_id_f1d56630_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h1', [_vm._v("Logout")]);
};
var Logoutvue_type_template_id_f1d56630_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Logout.vue?vue&type=script&lang=js&

/* harmony default export */ const Logoutvue_type_script_lang_js_ = ({
  name: 'logout-view',
  created: function created() {
    this.$store.commit('CLEAR_MEMBER_RESULTS', this.$store.state.memberResults);
    this.$store.commit("LOGOUT");
    this.$router.push("/login");
    /* setTimeout(function () { this.fetchHole() }.bind(this), 1000) */ /* Possible timeout code? */
  }
});
;// CONCATENATED MODULE: ./src/views/Logout.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_Logoutvue_type_script_lang_js_ = (Logoutvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/views/Logout.vue





/* normalize component */
;
var Logout_component = (0,componentNormalizer/* default */.Z)(
  views_Logoutvue_type_script_lang_js_,
  Logoutvue_type_template_id_f1d56630_render,
  Logoutvue_type_template_id_f1d56630_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const Logout = (Logout_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Register.vue?vue&type=template&id=631a7b5a&scoped=true&
var Registervue_type_template_id_631a7b5a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center",
    attrs: {
      "id": "register"
    }
  }, [_c('div', {
    staticClass: "headlogo"
  }, [_c('h1', {
    staticClass: "head"
  }, [_vm._v("Create Account")]), _c('router-link', {
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, [_c('img', {
    staticClass: "regheadLogo",
    attrs: {
      "src": __webpack_require__(9626)
    }
  })])], 1), _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.register.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "behind"
  }, [_vm.registrationErrors ? _c('div', {
    attrs: {
      "role": "alert"
    }
  }, [_vm._v(" " + _vm._s(_vm.registrationErrorMsg) + " ")]) : _vm._e(), _c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    attrs: {
      "for": "firstName"
    }
  }, [_vm._v("First Name: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.firstName,
      expression: "user.firstName"
    }],
    attrs: {
      "type": "text",
      "id": "firstName",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": _vm.user.firstName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "firstName", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    attrs: {
      "for": "lastName"
    }
  }, [_vm._v("Last Name: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.lastName,
      expression: "user.lastName"
    }],
    attrs: {
      "type": "text",
      "id": "lastName",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": _vm.user.lastName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "lastName", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.email,
      expression: "user.email"
    }],
    attrs: {
      "type": "email",
      "id": "email",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": _vm.user.email
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "email", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    attrs: {
      "for": "username"
    }
  }, [_vm._v("Username: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.username,
      expression: "user.username"
    }],
    attrs: {
      "type": "text",
      "id": "username",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": _vm.user.username
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "username", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password,
      expression: "user.password"
    }],
    attrs: {
      "type": "password",
      "id": "password",
      "required": ""
    },
    domProps: {
      "value": _vm.user.password
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "password", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    attrs: {
      "for": "confirmPassword"
    }
  }, [_vm._v("Confirm Password: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.confirmPassword,
      expression: "user.confirmPassword"
    }],
    attrs: {
      "type": "password",
      "id": "confirmPassword",
      "required": ""
    },
    domProps: {
      "value": _vm.user.confirmPassword
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "confirmPassword", $event.target.value);
      }
    }
  })]), _c('button', {
    staticClass: "submit",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Create Account")]), _c('p', [_c('router-link', {
    staticClass: "toLogin",
    attrs: {
      "to": {
        name: 'login'
      }
    }
  }, [_vm._v("Already have an account? Log in.")])], 1)])]), _c('p', {
    staticClass: "running"
  }, [_vm._v(" 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 ")])]);
};
var Registervue_type_template_id_631a7b5a_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/views/Register.vue?vue&type=template&id=631a7b5a&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Register.vue?vue&type=script&lang=js&


/* harmony default export */ const Registervue_type_script_lang_js_ = ({
  name: "register-view",
  data: function data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        role: "user"
      },
      registrationErrors: false,
      registrationErrorMsg: "There were problems registering this user."
    };
  },
  methods: {
    register: function register() {
      var _this = this;
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = "Password & Confirm Password do not match.";
      } else {
        AuthService.register(this.user).then(function (response) {
          if (response.status == 201) {
            _this.$router.push({
              path: "/login",
              query: {
                registration: "success"
              }
            });
          }
        })["catch"](function (error) {
          var response = error.response;
          _this.registrationErrors = true;
          if (response.status === 400) {
            _this.registrationErrorMsg = "Bad Request: Validation Errors";
          }
        });
      }
    },
    clearErrors: function clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = "There were problems registering this user.";
    }
  }
});
;// CONCATENATED MODULE: ./src/views/Register.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_Registervue_type_script_lang_js_ = (Registervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Register.vue?vue&type=style&index=0&id=631a7b5a&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Register.vue?vue&type=style&index=0&id=631a7b5a&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/views/Register.vue



;


/* normalize component */

var Register_component = (0,componentNormalizer/* default */.Z)(
  views_Registervue_type_script_lang_js_,
  Registervue_type_template_id_631a7b5a_scoped_true_render,
  Registervue_type_template_id_631a7b5a_scoped_true_staticRenderFns,
  false,
  null,
  "631a7b5a",
  null
  
)

/* harmony default export */ const Register = (Register_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(8862);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(629);
;// CONCATENATED MODULE: ./src/store/index.js





vue_runtime_esm/* default */.ZP.use(vuex_esm/* default */.ZP);

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
var currentToken = localStorage.getItem('token');
var currentUser = JSON.parse(localStorage.getItem('user'));
if (currentToken != null) {
  (axios_default()).defaults.headers.common['Authorization'] = "Bearer ".concat(currentToken);
}
/* harmony default export */ const store = (new vuex_esm/* default.Store */.ZP.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    bookResults: [],
    memberResults: [],
    prizeList: []
  },
  mutations: {
    SET_AUTH_TOKEN: function SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      (axios_default()).defaults.headers.common['Authorization'] = "Bearer ".concat(token);
    },
    SET_USER: function SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    LOGOUT: function LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      (axios_default()).defaults.headers.common = {};
    },
    ADD_BOOK_RESULTS: function ADD_BOOK_RESULTS(state, results) {
      state.bookResults = results;
    },
    ADD_MEMBERS: function ADD_MEMBERS(state, results) {
      state.memberResults = results;
    },
    CLEAR_MEMBER_RESULTS: function CLEAR_MEMBER_RESULTS(state) {
      state.memberResults = [];
    },
    ADD_PRIZE: function ADD_PRIZE(state, prize) {
      //Push new prize to the list of prizes
      state.prizeList.push(prize);
    }
  }
}));
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Members.vue?vue&type=template&id=41f23cbc&
var Membersvue_type_template_id_41f23cbc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "members"
  }, [_c('div', {
    staticClass: "logo_header"
  }, [_c('h3', {
    attrs: {
      "id": "member-heading"
    }
  }, [_vm._v("Your Family Members")]), _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(9626)
    }
  })])], 1), _vm.isLoading ? _c('div', {
    staticClass: "loading"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(11)
    }
  })]) : _c('table', {
    staticClass: "members-table"
  }, _vm._l(_vm.memberResults, function (member) {
    return _c('tr', {
      key: member.id,
      staticClass: "members-row"
    }, [_c('td', {
      staticClass: "members-table-data"
    }, [_c('router-link', {
      staticClass: "username",
      attrs: {
        "to": {
          name: 'user-profile',
          params: {
            username: member.username
          }
        }
      }
    }, [_vm._v(_vm._s(member.username))])], 1)]);
  }), 0), _c('div', {
    staticClass: "grid-container"
  }, [_c('family-reading-totals', {
    staticClass: "grid-item1"
  }), _c('br'), _c('the-leaderboard', {
    staticClass: "grid-item2"
  })], 1), _vm.isLoading ? _c('div', {
    staticClass: "loading"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(11)
    }
  })]) : _vm._e(), _c('div', {
    attrs: {
      "id": "nav"
    }
  }, [_c('button', {
    staticClass: "selections"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'reading'
      }
    }
  }, [_vm._v(" Reading")])], 1), _c('button', {
    staticClass: "selections"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'prize'
      }
    }
  }, [_vm._v(" Prizes ")])], 1), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isParent,
      expression: "isParent"
    }],
    staticClass: "selections"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'addmember'
      }
    }
  }, [_vm._v("Add User")])], 1)])]);
};
var Membersvue_type_template_id_41f23cbc_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/views/Members.vue?vue&type=template&id=41f23cbc&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FamilyReadingTotals.vue?vue&type=template&id=a28b463a&
var FamilyReadingTotalsvue_type_template_id_a28b463a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.isLoading ? _c('div', {
    staticClass: "loading"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(11)
    }
  })]) : _c('div', [_c('h4', {
    staticClass: "total-books-read",
    attrs: {
      "id": "books-read"
    }
  }, [_vm._v("Total Books Read:")]), _c('h4', {
    staticClass: "book-total",
    attrs: {
      "id": "all-books"
    }
  }, [_vm._v(_vm._s(_vm.familyBookTotal))]), _c('h4', {
    staticClass: "total-minutes-read",
    attrs: {
      "id": "all-minutes-read"
    }
  }, [_vm._v("Total Minutes of Reading:")]), _c('h4', {
    staticClass: "minute-total",
    attrs: {
      "id": "total-minutes"
    }
  }, [_vm._v(_vm._s(_vm.familyMinuteTotal))])])]);
};
var FamilyReadingTotalsvue_type_template_id_a28b463a_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/components/FamilyReadingTotals.vue?vue&type=template&id=a28b463a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
;// CONCATENATED MODULE: ./src/services/ReadingListService.js


var http = axios_default().create({
  baseURL: "http://localhost:9000"
});
/* harmony default export */ const ReadingListService = ({
  getFamilyReadingList: function getFamilyReadingList(finished) {
    return http.get("/all", finished);
  },
  getUserReadingList: function getUserReadingList(username) {
    return http.get("/user/".concat(username));
  },
  markBookAsFinished: function markBookAsFinished(username, isbn) {
    return http.put("/user/".concat(username, "?isbn=").concat(isbn));
  },
  getNumBooksFinishedPerUser: function getNumBooksFinishedPerUser(username) {
    return http.get("/user/".concat(username, "/completed"));
  },
  getNumBooksFinishedPerFamily: function getNumBooksFinishedPerFamily(id) {
    return http.get("/members/".concat(id, "/books"));
  }
});
;// CONCATENATED MODULE: ./src/services/ActivityService.js

var ActivityService_http = axios_default().create({
  baseURL: "https://bookbound-backend-production.up.railway.app" + "/user"
});
/* harmony default export */ const ActivityService = ({
  getUserReadingActivity: function getUserReadingActivity(username) {
    return ActivityService_http.get("/".concat(username, "/activity"));
  },
  create: function create(activity, username) {
    return ActivityService_http.post("/".concat(username, "/activity"), activity);
  },
  getTotalMinutesReadPerUser: function getTotalMinutesReadPerUser(username) {
    return ActivityService_http.get("/".concat(username, "/activity/total"));
  },
  getTotalMinutesReadPerFamily: function getTotalMinutesReadPerFamily(id) {
    return ActivityService_http.get("/members/".concat(id, "/activity"));
  },
  getLeaderboard: function getLeaderboard(id) {
    return ActivityService_http.get("/leaderboard/".concat(id));
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FamilyReadingTotals.vue?vue&type=script&lang=js&


/* harmony default export */ const FamilyReadingTotalsvue_type_script_lang_js_ = ({
  name: "family-reading-totals",
  isLoading: true,
  data: function data() {
    return {
      familyBookTotal: 0,
      familyMinuteTotal: 0
    };
  },
  created: function created() {
    var _this = this;
    ReadingListService.getNumBooksFinishedPerFamily(this.$store.state.user.familyId).then(function (response) {
      _this.familyBookTotal = response.data;
    });
    ActivityService.getTotalMinutesReadPerFamily(this.$store.state.user.familyId).then(function (response) {
      _this.familyMinuteTotal = response.data;
      _this.isLoading = false;
    });
  }
});
;// CONCATENATED MODULE: ./src/components/FamilyReadingTotals.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_FamilyReadingTotalsvue_type_script_lang_js_ = (FamilyReadingTotalsvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/FamilyReadingTotals.vue





/* normalize component */
;
var FamilyReadingTotals_component = (0,componentNormalizer/* default */.Z)(
  components_FamilyReadingTotalsvue_type_script_lang_js_,
  FamilyReadingTotalsvue_type_template_id_a28b463a_render,
  FamilyReadingTotalsvue_type_template_id_a28b463a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const FamilyReadingTotals = (FamilyReadingTotals_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TheLeaderboard.vue?vue&type=template&id=bb4c9808&
var TheLeaderboardvue_type_template_id_bb4c9808_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.isLoading ? _c('div', {
    staticClass: "loading"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(11)
    }
  })]) : _c('ul', [_c('h3', {
    staticClass: "leaderboard-head"
  }, [_vm._v("🌟 Leaderboard 🌟")]), _c('br'), _vm._l(_vm.scores, function (score) {
    return _c('li', {
      key: score.id,
      staticClass: "score"
    }, [_c('p', [_vm._v(_vm._s(score))])]);
  })], 2)]);
};
var TheLeaderboardvue_type_template_id_bb4c9808_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/components/TheLeaderboard.vue?vue&type=template&id=bb4c9808&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TheLeaderboard.vue?vue&type=script&lang=js&

/* harmony default export */ const TheLeaderboardvue_type_script_lang_js_ = ({
  name: "family-leaderboard",
  data: function data() {
    return {
      scores: [],
      isLoading: true
    };
  },
  created: function created() {
    var _this = this;
    ActivityService.getLeaderboard(this.$store.state.user.familyId).then(function (response) {
      _this.scores = response.data;
      _this.isLoading = false;
    });
  }
});
;// CONCATENATED MODULE: ./src/components/TheLeaderboard.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_TheLeaderboardvue_type_script_lang_js_ = (TheLeaderboardvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/TheLeaderboard.vue





/* normalize component */
;
var TheLeaderboard_component = (0,componentNormalizer/* default */.Z)(
  components_TheLeaderboardvue_type_script_lang_js_,
  TheLeaderboardvue_type_template_id_bb4c9808_render,
  TheLeaderboardvue_type_template_id_bb4c9808_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const TheLeaderboard = (TheLeaderboard_component.exports);
;// CONCATENATED MODULE: ./src/services/DocsService.js

var DocsService_http = axios_default().create({
  baseURL: "http://localhost:9000"
});
/* harmony default export */ const DocsService = ({
  list: function list(id) {
    return DocsService_http.get("/family/".concat(id));
  },
  get: function get(id) {
    return DocsService_http.get("/docs/".concat(id));
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Members.vue?vue&type=script&lang=js&




/* harmony default export */ const Membersvue_type_script_lang_js_ = ({
  name: "members-view",
  components: {
    FamilyReadingTotals: FamilyReadingTotals,
    TheLeaderboard: TheLeaderboard
  },
  data: function data() {
    return {
      isLoading: true,
      errorMsg: "",
      filterText: "",
      memberResults: []
    };
  },
  computed: {
    isParent: function isParent() {
      return this.$store.state.user.authorities[0].name != "ROLE_CHILD";
    }
  },
  created: function created() {
    var _this = this;
    DocsService.list(this.$store.state.user.familyId).then(function (response) {
      _this.memberResults = response.data;
      _this.isLoading = false;
    });
  }
});
;// CONCATENATED MODULE: ./src/views/Members.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_Membersvue_type_script_lang_js_ = (Membersvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Members.vue?vue&type=style&index=0&id=41f23cbc&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Members.vue?vue&type=style&index=0&id=41f23cbc&prod&lang=css&

;// CONCATENATED MODULE: ./src/views/Members.vue



;


/* normalize component */

var Members_component = (0,componentNormalizer/* default */.Z)(
  views_Membersvue_type_script_lang_js_,
  Membersvue_type_template_id_41f23cbc_render,
  Membersvue_type_template_id_41f23cbc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const Members = (Members_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Prizes.vue?vue&type=template&id=1df1c3c8&scoped=true&

var Prizesvue_type_template_id_1df1c3c8_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('header', [_c('div', {
    staticClass: "logo_header"
  }, [_c('h3', {
    attrs: {
      "id": "member-heading"
    }
  }, [_vm._v("Prizes")]), _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(9626)
    }
  })])], 1)]), _c('div', {
    staticClass: "prizes"
  }, [_vm.prizeList.length === 0 ? _c('div', {
    attrs: {
      "id": "blank-list"
    }
  }, [_c('h3', [_vm._v("Click below to add a new prize")])]) : _c('div', {
    staticClass: "details"
  }, _vm._l(_vm.prizeList, function (prize) {
    return _c('prize-detail', {
      key: prize.name,
      attrs: {
        "prize": prize,
        "showButton": true
      }
    });
  }), 1), _c('div', {
    staticClass: "addPrize"
  }, [_c('router-link', {
    attrs: {
      "to": "/addprize"
    }
  }, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isParent,
      expression: "isParent"
    }],
    staticClass: "prize-button"
  }, [_vm._v("Add Prize")])])], 1)])]);
};
var Prizesvue_type_template_id_1df1c3c8_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/views/Prizes.vue?vue&type=template&id=1df1c3c8&scoped=true&

;// CONCATENATED MODULE: ./src/services/PrizeService.js

var PrizeService_http = axios_default().create({
  baseURL: "http://localhost:9000/prize"
});
/* harmony default export */ const PrizeService = ({
  //List prizes for group type - both/child/parent
  listPrizesByUserGroup: function listPrizesByUserGroup(userGroup) {
    return PrizeService_http.get("/".concat(userGroup));
  },
  listAllPrizes: function listAllPrizes() {
    return PrizeService_http.get();
  },
  addToPrizeList: function addToPrizeList(prize) {
    return PrizeService_http.post('/', prize);
  },
  getPrizesEarned: function getPrizesEarned(username, finished) {
    return PrizeService_http.get("/prize/".concat(username), finished);
  },
  deletePrize: function deletePrize(prizeName) {
    return PrizeService_http["delete"]("/name/".concat(prizeName));
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PrizeDetail.vue?vue&type=template&id=435e8d74&scoped=true&



var PrizeDetailvue_type_template_id_435e8d74_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "prize-card"
  }, [_c('h3', [_vm._v(_vm._s(_vm.prize.name))]), _c('h4', [_vm._v(_vm._s(_vm.prize.description))]), _c('p', [_vm._v("To win: read for " + _vm._s(_vm.prize.milestone) + " minutes")]), _c('p', [_vm._v("Can be won by: " + _vm._s(_vm.userGroupText))]), _c('p', [_vm._v("Prizes remaining: " + _vm._s(_vm.prize.maxPrizes))]), _c('p', [_vm._v("Start Date: " + _vm._s(_vm.prize.startDate))]), _c('p', [_vm._v("End Date: " + _vm._s(_vm.prize.endDate))]), _c('form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isParent,
      expression: "isParent"
    }],
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.deletePrize(_vm.prize.name);
      }
    }
  }, [_c('button', {
    staticClass: "delete-button"
  }, [_vm._v("Delete prize")])])]);
};
var PrizeDetailvue_type_template_id_435e8d74_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/components/PrizeDetail.vue?vue&type=template&id=435e8d74&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PrizeDetail.vue?vue&type=script&lang=js&



/* harmony default export */ const PrizeDetailvue_type_script_lang_js_ = ({
  name: "prize-detail",
  props: ["prize"],
  computed: {
    userGroupText: function userGroupText() {
      if (this.prize.userGroup === "both") {
        return "Parents and children";
      } else if (this.prize.userGroup === "parent") {
        return "Parents";
      } else if (this.prize.userGroup === "child") {
        return "Children";
      }
      return "";
    },
    isParent: function isParent() {
      return this.$store.state.user.authorities[0].name != "ROLE_CHILD";
    }
  },
  methods: {
    addToPrizes: function addToPrizes(prize) {
      var _this = this;
      PrizeService.addToPrizeList(prize).then(function (response) {
        if (response.status === 200) {
          var username = _this.$store.state.user.username;
          _this.$router.push({
            name: "user-profile",
            params: {
              username: username
            }
          });
        }
      });
    },
    deletePrize: function deletePrize(prizeName) {
      PrizeService.deletePrize(prizeName);
      window.location.reload();
    }
  }
});
;// CONCATENATED MODULE: ./src/components/PrizeDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_PrizeDetailvue_type_script_lang_js_ = (PrizeDetailvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/PrizeDetail.vue?vue&type=style&index=0&id=435e8d74&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/PrizeDetail.vue?vue&type=style&index=0&id=435e8d74&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/PrizeDetail.vue



;


/* normalize component */

var PrizeDetail_component = (0,componentNormalizer/* default */.Z)(
  components_PrizeDetailvue_type_script_lang_js_,
  PrizeDetailvue_type_template_id_435e8d74_scoped_true_render,
  PrizeDetailvue_type_template_id_435e8d74_scoped_true_staticRenderFns,
  false,
  null,
  "435e8d74",
  null
  
)

/* harmony default export */ const PrizeDetail = (PrizeDetail_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Prizes.vue?vue&type=script&lang=js&



/* harmony default export */ const Prizesvue_type_script_lang_js_ = ({
  name: "prizes-view",
  components: {
    PrizeDetail: PrizeDetail
  },
  data: function data() {
    return {
      isLoading: true,
      prizeList: [],
      userGroup: "both"
    };
  },
  computed: {
    isParent: function isParent() {
      return this.$store.state.user.authorities[0].name != "ROLE_CHILD";
    }
  },
  created: function created() {
    var _this = this;
    PrizeService.listAllPrizes().then(function (response) {
      _this.prizeList = response.data;
      _this.isLoading = false;
    });
  }
});
;// CONCATENATED MODULE: ./src/views/Prizes.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_Prizesvue_type_script_lang_js_ = (Prizesvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Prizes.vue?vue&type=style&index=0&id=1df1c3c8&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Prizes.vue?vue&type=style&index=0&id=1df1c3c8&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/views/Prizes.vue



;


/* normalize component */

var Prizes_component = (0,componentNormalizer/* default */.Z)(
  views_Prizesvue_type_script_lang_js_,
  Prizesvue_type_template_id_1df1c3c8_scoped_true_render,
  Prizesvue_type_template_id_1df1c3c8_scoped_true_staticRenderFns,
  false,
  null,
  "1df1c3c8",
  null
  
)

/* harmony default export */ const Prizes = (Prizes_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Reading.vue?vue&type=template&id=12402db1&scoped=true&
var Readingvue_type_template_id_12402db1_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('header', [_c('div', {
    staticClass: "logo_header"
  }, [_c('h3', {
    attrs: {
      "id": "member-heading"
    }
  }, [_vm._v("Book Search")]), _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(9626)
    }
  })])], 1)]), _c('add-book')], 1);
};
var Readingvue_type_template_id_12402db1_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/views/Reading.vue?vue&type=template&id=12402db1&scoped=true&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AddBook.vue?vue&type=template&id=b71b128c&scoped=true&
var AddBookvue_type_template_id_b71b128c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "add-book"
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.getBook.apply(null, arguments);
      }
    }
  }, [_c('h1', [_vm._v("Add Book")]), _c('div', [_c('label', {
    attrs: {
      "for": "title"
    }
  }, [_vm._v("Title")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedOption,
      expression: "selectedOption"
    }],
    attrs: {
      "type": "radio",
      "name": "titleOrIsbn",
      "id": "title-button",
      "value": "title",
      "checked": ""
    },
    domProps: {
      "checked": _vm._q(_vm.selectedOption, "title")
    },
    on: {
      "change": function change($event) {
        _vm.selectedOption = "title";
      }
    }
  }), _c('label', {
    attrs: {
      "for": "isbn"
    }
  }, [_vm._v("ISBN")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedOption,
      expression: "selectedOption"
    }],
    attrs: {
      "type": "radio",
      "name": "titleOrIsbn",
      "id": "isbn-button",
      "value": "isbn"
    },
    domProps: {
      "checked": _vm._q(_vm.selectedOption, "isbn")
    },
    on: {
      "change": function change($event) {
        _vm.selectedOption = "isbn";
      }
    }
  })]), _vm.selectedOption === 'title' ? _c('div', [_c('label', {
    attrs: {
      "for": "title-input"
    }
  }, [_vm._v("Title")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bookToSearch.searchTerm,
      expression: "bookToSearch.searchTerm"
    }],
    attrs: {
      "type": "text",
      "id": "title-input"
    },
    domProps: {
      "value": _vm.bookToSearch.searchTerm
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.bookToSearch, "searchTerm", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm.selectedOption === 'isbn' ? _c('div', [_c('label', {
    attrs: {
      "for": "isbn-input"
    }
  }, [_vm._v("ISBN")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.bookToSearch.searchTerm,
      expression: "bookToSearch.searchTerm"
    }],
    attrs: {
      "type": "text",
      "id": "isbn-input"
    },
    domProps: {
      "value": _vm.bookToSearch.searchTerm
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.bookToSearch, "searchTerm", $event.target.value);
      }
    }
  })]) : _vm._e(), _c('button', {
    staticClass: "selections",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": _vm.makeVisible
    }
  }, [_vm._v("Find Book")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showResults,
      expression: "showResults"
    }],
    staticClass: "results-grid"
  }, _vm._l(this.$store.state.bookResults, function (book) {
    return _c('book-detail', {
      key: book.isbn,
      staticClass: "book-card",
      attrs: {
        "showButton": true,
        "book": book
      }
    });
  }), 1)]);
};
var AddBookvue_type_template_id_b71b128c_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/services/BookService.js


var BookService_http = axios_default().create({
  baseURL: "https://bookbound-backend-production.up.railway.app" + "/book"
});
/* harmony default export */ const BookService = ({
  listBooksByTitle: function listBooksByTitle(title) {
    return BookService_http.get("/title=".concat(title));
  },
  listBooksByPublisher: function listBooksByPublisher(publisher) {
    return BookService_http.get("/publisher=".concat(publisher));
  },
  get: function get(isbn) {
    return BookService_http.get("/isbn=".concat(isbn));
  },
  addToReadingList: function addToReadingList(isbn, username) {
    return BookService_http.post("/isbn=".concat(isbn, "?username=").concat(username));
  },
  "delete": function _delete(isbn) {
    return BookService_http["delete"]("/books/".concat(isbn));
  }
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BookDetail.vue?vue&type=template&id=152c0043&scoped=true&

var BookDetailvue_type_template_id_152c0043_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "book-image"
  }, [_c('img', {
    attrs: {
      "src": _vm.book.coverUrl
    }
  })]), _c('div', {
    staticClass: "book-details"
  }, [_c('h4', [_vm._v(_vm._s(_vm.book.title))]), _c('p', [_vm._v("Author: " + _vm._s(_vm.book.author))]), _c('p', [_vm._v("ISBN: " + _vm._s(_vm.book.isbn))]), _c('p', [_vm._v("Pages: " + _vm._s(_vm.book.numPages))]), _c('p', [_vm._v("Publisher: " + _vm._s(_vm.book.publisher))])]), _c('div', {
    attrs: {
      "id": "add-mark-buttons"
    }
  }, [_vm.$route.name == 'reading' ? _c('button', {
    staticClass: "add-button",
    on: {
      "click": function click($event) {
        return _vm.addToReading(_vm.book.isbn);
      }
    }
  }, [_vm._v(" Add to reading list ")]) : _c('button', {
    staticClass: "finished-button",
    on: {
      "click": function click($event) {
        return _vm.markBookAsRead(_vm.book.isbn);
      }
    }
  }, [_vm._v(" Mark as finished ")])])]);
};
var BookDetailvue_type_template_id_152c0043_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/components/BookDetail.vue?vue&type=template&id=152c0043&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BookDetail.vue?vue&type=script&lang=js&



/* harmony default export */ const BookDetailvue_type_script_lang_js_ = ({
  name: "book-detail",
  props: {
    book: Object
  },
  methods: {
    markBookAsRead: function markBookAsRead(isbn) {
      var _this = this;
      ReadingListService.markBookAsFinished(this.$route.params.username, isbn).then(function (response) {
        if (response.status == 200) {
          _this.reloadPage();
        }
      });
    },
    reloadPage: function reloadPage() {
      window.location.reload();
    },
    addToReading: function addToReading(isbn) {
      var _this2 = this;
      var username = this.$store.state.user.username;
      BookService.addToReadingList(isbn, username).then(function (response) {
        if (response.status === 200) {
          _this2.$router.push({
            name: "user-profile",
            params: {
              username: username
            }
          });
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/components/BookDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_BookDetailvue_type_script_lang_js_ = (BookDetailvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BookDetail.vue?vue&type=style&index=0&id=152c0043&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/BookDetail.vue?vue&type=style&index=0&id=152c0043&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/BookDetail.vue



;


/* normalize component */

var BookDetail_component = (0,componentNormalizer/* default */.Z)(
  components_BookDetailvue_type_script_lang_js_,
  BookDetailvue_type_template_id_152c0043_scoped_true_render,
  BookDetailvue_type_template_id_152c0043_scoped_true_staticRenderFns,
  false,
  null,
  "152c0043",
  null
  
)

/* harmony default export */ const BookDetail = (BookDetail_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AddBook.vue?vue&type=script&lang=js&



/* harmony default export */ const AddBookvue_type_script_lang_js_ = ({
  components: {
    BookDetail: BookDetail
  },
  name: "add-book",
  data: function data() {
    return {
      showResults: false,
      isbn: 0,
      selectedOption: "title",
      bookToSearch: {
        searchTerm: ""
      },
      bookResults: []
    };
  },
  methods: {
    getBook: function getBook() {
      var _this = this;
      this.resetBookResults();
      var searchTerm = this.bookToSearch.searchTerm;
      if (this.selectedOption == "isbn") {
        BookService.get(searchTerm).then(function (response) {
          if (response.status === 200) {
            _this.bookResults = [response.data];
            _this.$store.commit("ADD_BOOK_RESULTS", _this.bookResults);
            _this.makeVisible();
          }
        });
      } else {
        BookService.listBooksByTitle(searchTerm).then(function (response) {
          if (response.status === 200) {
            _this.bookResults = response.data;
            _this.$store.commit("ADD_BOOK_RESULTS", _this.bookResults);
            _this.makeVisible();
          }
        });
      }
    },
    resetBookResults: function resetBookResults() {
      this.bookResults = [];
      this.showResults = false;
    },
    makeVisible: function makeVisible() {
      this.showResults = true;
    },
    addToReading: function addToReading(isbn) {
      var _this2 = this;
      BookService.addToReadingList(isbn).then(function (response) {
        if (response.status === 200) {
          var username = _this2.$store.state.user.username;
          _this2.$router.push({
            name: "user-profile",
            params: {
              username: username
            }
          });
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/components/AddBook.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_AddBookvue_type_script_lang_js_ = (AddBookvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AddBook.vue?vue&type=style&index=0&id=b71b128c&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/AddBook.vue?vue&type=style&index=0&id=b71b128c&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/AddBook.vue



;


/* normalize component */

var AddBook_component = (0,componentNormalizer/* default */.Z)(
  components_AddBookvue_type_script_lang_js_,
  AddBookvue_type_template_id_b71b128c_scoped_true_render,
  AddBookvue_type_template_id_b71b128c_scoped_true_staticRenderFns,
  false,
  null,
  "b71b128c",
  null
  
)

/* harmony default export */ const AddBook = (AddBook_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Reading.vue?vue&type=script&lang=js&

/* harmony default export */ const Readingvue_type_script_lang_js_ = ({
  name: "reading-view",
  components: {
    AddBook: AddBook
  },
  methods: {}
});
;// CONCATENATED MODULE: ./src/views/Reading.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_Readingvue_type_script_lang_js_ = (Readingvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Reading.vue?vue&type=style&index=0&id=12402db1&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Reading.vue?vue&type=style&index=0&id=12402db1&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/views/Reading.vue



;


/* normalize component */

var Reading_component = (0,componentNormalizer/* default */.Z)(
  views_Readingvue_type_script_lang_js_,
  Readingvue_type_template_id_12402db1_scoped_true_render,
  Readingvue_type_template_id_12402db1_scoped_true_staticRenderFns,
  false,
  null,
  "12402db1",
  null
  
)

/* harmony default export */ const Reading = (Reading_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/UserProfile.vue?vue&type=template&id=11124c64&
var UserProfilevue_type_template_id_11124c64_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "users"
  }, [_c('div', {
    staticClass: "user-head"
  }, [_c('h2', {
    staticClass: "usersname"
  }, [_vm._v(_vm._s(_vm.$route.params.username))]), _c('p', {
    staticClass: "page"
  }, [_vm._v("'s Page")]), _c('h1', [_c('router-link', {
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, [_c('img', {
    staticClass: "logo-user",
    attrs: {
      "src": __webpack_require__(9626),
      "alt": "logo"
    }
  })])], 1)]), _c('div', {
    staticClass: "totals"
  }, [_c('reading-totals', {
    staticClass: "reading-totals"
  })], 1), _c('div', {
    staticClass: "reading-list"
  }, [_vm.isLoading ? _c('div', {
    staticClass: "loading"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(11)
    }
  })]) : _c('div', {
    staticClass: "reading-list-grid"
  }, _vm._l(_vm.readingList, function (book) {
    return _c('book-detail', {
      key: book.isbn,
      staticClass: "book-card",
      attrs: {
        "book": book
      }
    });
  }), 1)]), _c('div', [_c('reading-activity')], 1)]);
};
var UserProfilevue_type_template_id_11124c64_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/views/UserProfile.vue?vue&type=template&id=11124c64&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ReadingActivity.vue?vue&type=template&id=8d2f211e&scoped=true&
var ReadingActivityvue_type_template_id_8d2f211e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "activity-page"
  }, [_c('div', {
    staticClass: "activity-log"
  }, [_c('br'), _c('br'), _c('h3', {
    staticClass: "reading-activity"
  }, [_vm._v("Reading Activity")]), _c('div', {
    staticClass: "list-boxes"
  }, _vm._l(_vm.activityList, function (activity) {
    return _c('ul', {
      key: activity.id,
      staticClass: "activity-list"
    }, [_c('li', [_c('p', [_vm._v("User: " + _vm._s(_vm.$route.params.username))]), _c('p', [_vm._v("ISBN: " + _vm._s(activity.bookIsbn))]), _c('p', [_vm._v("Minutes of reading: " + _vm._s(activity.minutesRead))]), _c('p', [_vm._v("Format: " + _vm._s(activity.format))]), _c('p', [_vm._v("Notes: " + _vm._s(activity.notes))]), _c('br')])]);
  }), 0)]), _c('br'), _c('br'), _c('div', {
    staticClass: "add-activity"
  }, [_c('form', {
    staticClass: "addReadingActivity",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.addActivity.apply(null, arguments);
      }
    }
  }, [_c('h1', {
    staticClass: "headerForActivity"
  }, [_vm._v("Add Reading Activity")]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isParent,
      expression: "isParent"
    }],
    staticClass: "form-input-group-reading"
  }, [_c('label', {
    attrs: {
      "for": "username"
    }
  }, [_vm._v("Username")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newActivity.username,
      expression: "newActivity.username"
    }],
    attrs: {
      "type": "text",
      "id": "username"
    },
    domProps: {
      "value": _vm.newActivity.username
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.newActivity, "username", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group-reading"
  }, [_c('label', {
    attrs: {
      "for": "bookIsbn"
    }
  }, [_vm._v("Book ISBN")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newActivity.bookIsbn,
      expression: "newActivity.bookIsbn"
    }],
    attrs: {
      "type": "text",
      "id": "bookIsbn",
      "required": ""
    },
    domProps: {
      "value": _vm.newActivity.bookIsbn
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.newActivity, "bookIsbn", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group-reading"
  }, [_c('label', {
    attrs: {
      "for": "minutesRead"
    }
  }, [_vm._v("Minutes Read")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newActivity.minutesRead,
      expression: "newActivity.minutesRead"
    }],
    attrs: {
      "type": "number",
      "id": "minutesRead",
      "required": ""
    },
    domProps: {
      "value": _vm.newActivity.minutesRead
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.newActivity, "minutesRead", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group-reading"
  }, [_c('label', {
    attrs: {
      "for": "format"
    }
  }, [_vm._v("Format")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newActivity.format,
      expression: "newActivity.format"
    }],
    attrs: {
      "type": "text",
      "id": "format",
      "required": ""
    },
    domProps: {
      "value": _vm.newActivity.format
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.newActivity, "format", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group-reading"
  }, [_c('label', {
    attrs: {
      "for": "notes"
    }
  }, [_vm._v("Notes")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newActivity.notes,
      expression: "newActivity.notes"
    }],
    attrs: {
      "type": "text",
      "id": "notes"
    },
    domProps: {
      "value": _vm.newActivity.notes
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.newActivity, "notes", $event.target.value);
      }
    }
  })]), _c('button', {
    staticClass: "activity-button",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Add Activity")])])])]);
};
var ReadingActivityvue_type_template_id_8d2f211e_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ReadingActivity.vue?vue&type=script&lang=js&


/* harmony default export */ const ReadingActivityvue_type_script_lang_js_ = ({
  name: "reading-activity",
  data: function data() {
    return {
      isLoading: true,
      activityList: [],
      newActivity: {
        username: this.$store.state.user.username,
        bookIsbn: "",
        minutesRead: 0,
        format: "",
        notes: ""
      }
    };
  },
  computed: {
    isParent: function isParent() {
      return this.$store.state.user.authorities[0].name != "ROLE_CHILD";
    }
  },
  created: function created() {
    var _this = this;
    ActivityService.getUserReadingActivity(this.$route.params.username).then(function (response) {
      _this.activityList = response.data;
      _this.isLoading = false;
    });
  },
  methods: {
    addActivity: function addActivity() {
      var _this2 = this;
      var username = this.$route.params.username;
      ActivityService.create(this.newActivity, username).then(function (response) {
        if (response.status == 200) {
          _this2.clearNewActivity();
          _this2.reloadPage();
        }
      });
    },
    clearNewActivity: function clearNewActivity() {
      this.newActivity.username = "";
      this.newActivity.bookIsbn = "", this.newActivity.minutesRead = 0;
      this.newActivity.format = "";
      this.newActivity.notes = "";
    },
    reloadPage: function reloadPage() {
      window.location.reload();
    }
  }
});
;// CONCATENATED MODULE: ./src/components/ReadingActivity.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_ReadingActivityvue_type_script_lang_js_ = (ReadingActivityvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ReadingActivity.vue?vue&type=style&index=0&id=8d2f211e&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ReadingActivity.vue?vue&type=style&index=0&id=8d2f211e&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/ReadingActivity.vue



;


/* normalize component */

var ReadingActivity_component = (0,componentNormalizer/* default */.Z)(
  components_ReadingActivityvue_type_script_lang_js_,
  ReadingActivityvue_type_template_id_8d2f211e_scoped_true_render,
  ReadingActivityvue_type_template_id_8d2f211e_scoped_true_staticRenderFns,
  false,
  null,
  "8d2f211e",
  null
  
)

/* harmony default export */ const ReadingActivity = (ReadingActivity_component.exports);
;// CONCATENATED MODULE: ./src/components/ReadingTotals.vue
var ReadingTotals_render, ReadingTotals_staticRenderFns
var script = {}


/* normalize component */
;
var ReadingTotals_component = (0,componentNormalizer/* default */.Z)(
  script,
  ReadingTotals_render,
  ReadingTotals_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const ReadingTotals = (ReadingTotals_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/UserProfile.vue?vue&type=script&lang=js&




/* harmony default export */ const UserProfilevue_type_script_lang_js_ = ({
  components: {
    ReadingActivity: ReadingActivity,
    BookDetail: BookDetail,
    ReadingTotals: ReadingTotals
  },
  name: "user-profile",
  data: function data() {
    return {
      isLoading: true,
      readingList: []
    };
  },
  created: function created() {
    this.addReading();
  },
  methods: {
    addReading: function addReading() {
      var _this = this;
      ReadingListService.getUserReadingList(this.$route.params.username).then(function (response) {
        _this.readingList = response.data;
        _this.isLoading = false;
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/views/UserProfile.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_UserProfilevue_type_script_lang_js_ = (UserProfilevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/UserProfile.vue?vue&type=style&index=0&id=11124c64&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/UserProfile.vue?vue&type=style&index=0&id=11124c64&prod&lang=css&

;// CONCATENATED MODULE: ./src/views/UserProfile.vue



;


/* normalize component */

var UserProfile_component = (0,componentNormalizer/* default */.Z)(
  views_UserProfilevue_type_script_lang_js_,
  UserProfilevue_type_template_id_11124c64_render,
  UserProfilevue_type_template_id_11124c64_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const UserProfile = (UserProfile_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/AddMember.vue?vue&type=template&id=9a94fe86&
var AddMembervue_type_template_id_9a94fe86_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "add-member"
  }, [_c('h1', {
    staticClass: "header"
  }, [_vm._v("Please Add Your Family Member!")]), _c('add-form'), _c('p', {
    staticClass: "running_board"
  }, [_vm._v(" 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 ")])], 1);
};
var AddMembervue_type_template_id_9a94fe86_staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(1249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(7327);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AddForm.vue?vue&type=template&id=6c846a30&



var AddFormvue_type_template_id_6c846a30_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "text-center",
    attrs: {
      "id": "add"
    }
  }, [_c('form', {
    staticClass: "members_form",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.addForm.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "behind_form_text"
  }, [_c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    staticClass: "add_label",
    attrs: {
      "for": "username"
    }
  }, [_vm._v("Username: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.username,
      expression: "user.username"
    }],
    attrs: {
      "type": "text",
      "id": "username",
      "required": ""
    },
    domProps: {
      "value": _vm.user.username
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "username", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    staticClass: "add_label",
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password,
      expression: "user.password"
    }],
    attrs: {
      "type": "password",
      "id": "password",
      "required": ""
    },
    domProps: {
      "value": _vm.user.password
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "password", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    staticClass: "add_label",
    attrs: {
      "for": "firstname"
    }
  }, [_vm._v("First Name: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.firstName,
      expression: "user.firstName"
    }],
    staticClass: "add_label",
    attrs: {
      "type": "text",
      "id": "firstname",
      "required": ""
    },
    domProps: {
      "value": _vm.user.firstName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "firstName", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    staticClass: "add_label",
    attrs: {
      "for": "lastname"
    }
  }, [_vm._v("Last Name: ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.lastName,
      expression: "user.lastName"
    }],
    attrs: {
      "type": "text",
      "id": "lastname",
      "required": ""
    },
    domProps: {
      "value": _vm.user.lastName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "lastName", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group"
  }, [_c('label', {
    staticClass: "add_label",
    attrs: {
      "for": "role"
    }
  }, [_vm._v("Role: ")]), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.role,
      expression: "user.role"
    }],
    attrs: {
      "id": "role",
      "required": ""
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.user, "role", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "parent"
    }
  }, [_vm._v("Parent 🐓")]), _c('option', {
    attrs: {
      "value": "child"
    }
  }, [_vm._v("Child 🐥")])])]), _c('br')]), _c('br'), _c('button', {
    staticClass: "add-member-button",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Add Family Member")])])])]);
};
var AddFormvue_type_template_id_6c846a30_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/components/AddForm.vue?vue&type=template&id=6c846a30&

;// CONCATENATED MODULE: ./src/services/UserService.js

var UserService_http = axios_default().create({
  baseURL: "http://localhost:9000/"
});
/* harmony default export */ const UserService = ({
  add: function add(user) {
    return axios_default().post('/user', user);
  },
  update: function update(user) {
    return UserService_http.put("/user/".concat(user.username), user);
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AddForm.vue?vue&type=script&lang=js&


/* harmony default export */ const AddFormvue_type_script_lang_js_ = ({
  name: "add-form",
  data: function data() {
    return {
      user: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        role: ""
      },
      registrationErrors: false,
      registrationErrorMsg: "There were problems registering this user."
    };
  },
  methods: {
    addForm: function addForm() {
      var _this = this;
      var newMember = {
        username: this.user.username,
        password: this.user.password,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        role: this.user.role
      };
      if (this.username != "") {
        UserService.add(newMember).then(function (response) {
          if (response.status === 200) {
            _this.user = {
              username: "",
              password: "",
              firstName: "",
              lastName: "",
              role: ""
            };
            _this.$router.push({
              path: "/members"
            });
          }
        });
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/components/AddForm.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_AddFormvue_type_script_lang_js_ = (AddFormvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AddForm.vue?vue&type=style&index=0&id=6c846a30&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/AddForm.vue?vue&type=style&index=0&id=6c846a30&prod&lang=css&

;// CONCATENATED MODULE: ./src/components/AddForm.vue



;


/* normalize component */

var AddForm_component = (0,componentNormalizer/* default */.Z)(
  components_AddFormvue_type_script_lang_js_,
  AddFormvue_type_template_id_6c846a30_render,
  AddFormvue_type_template_id_6c846a30_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const AddForm = (AddForm_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/AddMember.vue?vue&type=script&lang=js&

/* harmony default export */ const AddMembervue_type_script_lang_js_ = ({
  components: {
    addForm: AddForm
  }
});
;// CONCATENATED MODULE: ./src/views/AddMember.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_AddMembervue_type_script_lang_js_ = (AddMembervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/AddMember.vue?vue&type=style&index=0&id=9a94fe86&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/AddMember.vue?vue&type=style&index=0&id=9a94fe86&prod&lang=css&

;// CONCATENATED MODULE: ./src/views/AddMember.vue



;


/* normalize component */

var AddMember_component = (0,componentNormalizer/* default */.Z)(
  views_AddMembervue_type_script_lang_js_,
  AddMembervue_type_template_id_9a94fe86_render,
  AddMembervue_type_template_id_9a94fe86_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const AddMember = (AddMember_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/AddPrizePage.vue?vue&type=template&id=0d1b00ef&
var AddPrizePagevue_type_template_id_0d1b00ef_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('add-prize-form'), _vm._m(0)], 1);
};
var AddPrizePagevue_type_template_id_0d1b00ef_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "run"
  }, [_c('p', [_vm._v(" 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 📕 📙 📒 📗 📘 📓 ")])]);
}];

;// CONCATENATED MODULE: ./src/views/AddPrizePage.vue?vue&type=template&id=0d1b00ef&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AddPrizeForm.vue?vue&type=template&id=25c97626&scoped=true&



var AddPrizeFormvue_type_template_id_25c97626_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "text-center",
    attrs: {
      "id": "addPrize"
    }
  }, [_c('h1', {
    staticClass: "prize-header"
  }, [_vm._v("🌟 Add Prize 🌟")]), _c('div', {
    staticClass: "behind-prize-form-text"
  }, [_c('form', {
    staticClass: "prize-form",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.addPrize.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "form-input-group-prize"
  }, [_c('label', {
    attrs: {
      "for": "prize-name"
    }
  }, [_vm._v("Prize Name")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.prize.name,
      expression: "prize.name"
    }],
    attrs: {
      "type": "text",
      "id": "prize-name",
      "required": ""
    },
    domProps: {
      "value": _vm.prize.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.prize, "name", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group-prize"
  }, [_c('label', {
    staticClass: "prize-label",
    attrs: {
      "for": "prize-description"
    }
  }, [_vm._v("Prize Description")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.prize.description,
      expression: "prize.description"
    }],
    attrs: {
      "type": "text",
      "id": "prize-description",
      "required": ""
    },
    domProps: {
      "value": _vm.prize.description
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.prize, "description", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group-prize"
  }, [_c('label', {
    staticClass: "prize-label",
    attrs: {
      "for": "milestone"
    }
  }, [_vm._v("Milestone")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.prize.milestone,
      expression: "prize.milestone"
    }],
    attrs: {
      "type": "text",
      "id": "milestone",
      "required": ""
    },
    domProps: {
      "value": _vm.prize.milestone
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.prize, "milestone", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group-prize"
  }, [_c('label', {
    staticClass: "prize-label",
    attrs: {
      "for": "user-group"
    }
  }, [_vm._v("User Group")]), _c('label', {
    staticClass: "prize-label",
    attrs: {
      "for": "user-group"
    }
  }, [_vm._v("Parent")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.prize.userGroup,
      expression: "prize.userGroup"
    }],
    attrs: {
      "type": "radio",
      "name": "family-group",
      "value": "parent",
      "required": ""
    },
    domProps: {
      "checked": _vm._q(_vm.prize.userGroup, "parent")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.prize, "userGroup", "parent");
      }
    }
  }), _c('label', {
    staticClass: "prize-label",
    attrs: {
      "for": "user-group"
    }
  }, [_vm._v("Child")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.prize.userGroup,
      expression: "prize.userGroup"
    }],
    attrs: {
      "type": "radio",
      "name": "family-group",
      "value": "child",
      "required": ""
    },
    domProps: {
      "checked": _vm._q(_vm.prize.userGroup, "child")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.prize, "userGroup", "child");
      }
    }
  }), _c('label', {
    staticClass: "prize-label",
    attrs: {
      "for": "user-group"
    }
  }, [_vm._v("Both")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.prize.userGroup,
      expression: "prize.userGroup"
    }],
    attrs: {
      "type": "radio",
      "name": "family-group",
      "value": "both",
      "required": ""
    },
    domProps: {
      "checked": _vm._q(_vm.prize.userGroup, "both")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.prize, "userGroup", "both");
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group-prize"
  }, [_c('label', {
    staticClass: "prize-label",
    attrs: {
      "for": "max-prizes"
    }
  }, [_vm._v("Max Prizes")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.prize.maxPrizes,
      expression: "prize.maxPrizes"
    }],
    attrs: {
      "type": "text",
      "id": "max-prizes",
      "required": ""
    },
    domProps: {
      "value": _vm.prize.maxPrizes
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.prize, "maxPrizes", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group-prize"
  }, [_c('label', {
    staticClass: "prize-label",
    attrs: {
      "for": "start-date"
    }
  }, [_vm._v("Start Date")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.prize.startDate,
      expression: "prize.startDate"
    }],
    attrs: {
      "type": "date",
      "id": "start-date",
      "required": ""
    },
    domProps: {
      "value": _vm.prize.startDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.prize, "startDate", $event.target.value);
      }
    }
  })]), _c('div', {
    staticClass: "form-input-group-prize"
  }, [_c('label', {
    staticClass: "prize-label",
    attrs: {
      "for": "end-date"
    }
  }, [_vm._v("End Date")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.prize.endDate,
      expression: "prize.endDate"
    }],
    attrs: {
      "type": "date",
      "id": "end-date",
      "required": ""
    },
    domProps: {
      "value": _vm.prize.endDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.prize, "endDate", $event.target.value);
      }
    }
  })]), _c('button', {
    staticClass: "prize-button"
  }, [_vm._v("Add Prize")])])])])]);
};
var AddPrizeFormvue_type_template_id_25c97626_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/components/AddPrizeForm.vue?vue&type=template&id=25c97626&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AddPrizeForm.vue?vue&type=script&lang=js&





/* harmony default export */ const AddPrizeFormvue_type_script_lang_js_ = ({
  name: "add-prize",
  data: function data() {
    return {
      prize: {
        name: "",
        description: "",
        milestone: "",
        userGroup: "",
        maxPrizes: "",
        startDate: "",
        endDate: ""
      }
    };
  },
  methods: {
    addPrize: function addPrize() {
      var _this = this;
      var newPrize = {
        name: this.prize.name,
        description: this.prize.description,
        milestone: this.prize.milestone,
        userGroup: this.prize.userGroup,
        maxPrizes: this.prize.maxPrizes,
        startDate: this.prize.startDate,
        endDate: this.prize.endDate
      };
      if (this.username != "") {
        PrizeService.addToPrizeList(newPrize).then(function (response) {
          if (response.status === 200) {
            _this.prizes = {
              name: "",
              description: "",
              milestone: "",
              userGroup: "",
              maxPrizes: "",
              startDate: "",
              endDate: ""
            };
            _this.$router.push({
              path: "/prize"
            });
          }
        });
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/components/AddPrizeForm.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_AddPrizeFormvue_type_script_lang_js_ = (AddPrizeFormvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/AddPrizeForm.vue?vue&type=style&index=0&id=25c97626&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/AddPrizeForm.vue?vue&type=style&index=0&id=25c97626&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/AddPrizeForm.vue



;


/* normalize component */

var AddPrizeForm_component = (0,componentNormalizer/* default */.Z)(
  components_AddPrizeFormvue_type_script_lang_js_,
  AddPrizeFormvue_type_template_id_25c97626_scoped_true_render,
  AddPrizeFormvue_type_template_id_25c97626_scoped_true_staticRenderFns,
  false,
  null,
  "25c97626",
  null
  
)

/* harmony default export */ const AddPrizeForm = (AddPrizeForm_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/AddPrizePage.vue?vue&type=script&lang=js&

/* harmony default export */ const AddPrizePagevue_type_script_lang_js_ = ({
  components: {
    addPrizeForm: AddPrizeForm
  }
});
;// CONCATENATED MODULE: ./src/views/AddPrizePage.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_AddPrizePagevue_type_script_lang_js_ = (AddPrizePagevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/AddPrizePage.vue?vue&type=style&index=0&id=0d1b00ef&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/AddPrizePage.vue?vue&type=style&index=0&id=0d1b00ef&prod&lang=css&

;// CONCATENATED MODULE: ./src/views/AddPrizePage.vue



;


/* normalize component */

var AddPrizePage_component = (0,componentNormalizer/* default */.Z)(
  views_AddPrizePagevue_type_script_lang_js_,
  AddPrizePagevue_type_template_id_0d1b00ef_render,
  AddPrizePagevue_type_template_id_0d1b00ef_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const AddPrizePage = (AddPrizePage_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/AboutUs.vue?vue&type=template&id=1bac5d4e&scoped=true&
var AboutUsvue_type_template_id_1bac5d4e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var AboutUsvue_type_template_id_1bac5d4e_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "about-us"
  }, [_c('div', {
    staticClass: "head"
  }, [_c('h1', [_vm._v("About Us")]), _c('img', {
    staticClass: "title-logo",
    attrs: {
      "src": __webpack_require__(9626)
    }
  })]), _c('div', {
    staticClass: "flexbox"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(618),
      "id": "ava",
      "alt": ""
    }
  }), _c('br'), _c('p', {
    staticClass: "name"
  }, [_vm._v("Ava Lindstrom")]), _c('a', {
    attrs: {
      "href": "https://www.linkedin.com/in/ava-lindstrom/",
      "id": "ava-li"
    }
  }, [_vm._v("LinkedIn")]), _c('br'), _c('p', {
    staticClass: "about"
  }, [_vm._v("Coding enthusiast, crossword puzzler, and comic book fanatic. Vegetarian bruncher, omnivorous reader. Likely on a train right now.")]), _c('br'), _c('p', {
    staticClass: "location"
  }, [_vm._v("Location: Chicago, IL")])]), _c('br'), _c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(6591),
      "id": "nova",
      "alt": ""
    }
  }), _c('br'), _c('p', {
    staticClass: "name"
  }, [_vm._v("Nova Widdifield")]), _c('a', {
    attrs: {
      "href": "https://www.linkedin.com/in/nova-widdifield/",
      "id": "nova-li"
    }
  }, [_vm._v("LinkedIn")]), _c('br'), _c('p', {
    staticClass: "about"
  }, [_vm._v("Lover of animals, art enthusiast, and co-parent of Noodle the pampered poodle. Changed careers to become an avid CSS enjoyer. ")]), _c('br'), _c('p', {
    staticClass: "location"
  }, [_vm._v("Location: Aurora, CO")])]), _c('br'), _c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(2806),
      "id": "vince",
      "alt": ""
    }
  }), _c('br'), _c('p', {
    staticClass: "name"
  }, [_vm._v("Vince Patterson")]), _c('a', {
    attrs: {
      "href": "https://www.linkedin.com/in/vincent-patterson/",
      "id": "vince-li"
    }
  }, [_vm._v("LinkedIn")]), _c('br'), _c('p', {
    staticClass: "about"
  }, [_vm._v(" Cat father of 2 rapscallions. Web devloper, flavored water drinker, statically-typed language enjoyer, and part-time aspiring guitarist. ")]), _c('br'), _c('p', {
    staticClass: "location"
  }, [_vm._v("Location: Springfield, OH")])]), _c('br'), _c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(8885),
      "id": "blake",
      "alt": ""
    }
  }), _c('br'), _c('p', {
    staticClass: "name"
  }, [_vm._v("Blake Prather")]), _c('a', {
    attrs: {
      "href": "https://www.linkedin.com/in/blake-c-prather/",
      "id": "blake-li"
    }
  }, [_vm._v("LinkedIn")]), _c('br'), _c('p', {
    staticClass: "about"
  }, [_vm._v(" Father to three awesome little boys. Husband to Cera. Career changer from State Trooper to software developer. Outdoorsy. Novice gardener. ")]), _c('br'), _c('p', {
    staticClass: "location"
  }, [_vm._v("Location: Delaware, OH")])]), _c('br')])]);
}];

;// CONCATENATED MODULE: ./src/views/AboutUs.vue?vue&type=template&id=1bac5d4e&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/AboutUs.vue?vue&type=script&lang=js&
/* harmony default export */ const AboutUsvue_type_script_lang_js_ = ({
  name: "about-us"
});
;// CONCATENATED MODULE: ./src/views/AboutUs.vue?vue&type=script&lang=js&
 /* harmony default export */ const views_AboutUsvue_type_script_lang_js_ = (AboutUsvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/AboutUs.vue?vue&type=style&index=0&id=1bac5d4e&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/AboutUs.vue?vue&type=style&index=0&id=1bac5d4e&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/views/AboutUs.vue



;


/* normalize component */

var AboutUs_component = (0,componentNormalizer/* default */.Z)(
  views_AboutUsvue_type_script_lang_js_,
  AboutUsvue_type_template_id_1bac5d4e_scoped_true_render,
  AboutUsvue_type_template_id_1bac5d4e_scoped_true_staticRenderFns,
  false,
  null,
  "1bac5d4e",
  null
  
)

/* harmony default export */ const AboutUs = (AboutUs_component.exports);
;// CONCATENATED MODULE: ./src/router/index.js
















vue_runtime_esm/* default */.ZP.use(vue_router_esm/* default */.ZP);

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

var router = new vue_router_esm/* default */.ZP({
  mode: 'history',
  base: "/BookBound/",
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: false
    }
  }, {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false
    }
  }, {
    path: "/logout",
    name: "logout",
    component: Logout,
    meta: {
      requiresAuth: false
    }
  }, {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresAuth: false
    }
  }, {
    path: "/members",
    name: "members",
    component: Members,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/prize",
    name: "prize",
    component: Prizes
  }, {
    path: "/book",
    name: "reading",
    component: Reading
  }, {
    path: "/user-profile/:username",
    name: "user-profile",
    component: UserProfile
  }, {
    path: "/addmember",
    name: "addmember",
    component: AddMember
  }, {
    path: "/addprize",
    name: "addprize",
    component: AddPrizePage
  }, {
    path: "/aboutus",
    name: "aboutus",
    component: AboutUs
  }]
});
router.beforeEach(function (to, from, next) {
  // Determine if the route requires Authentication
  var requiresAuth = to.matched.some(function (x) {
    return x.meta.requiresAuth;
  });

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});
/* harmony default export */ const src_router = (router);
;// CONCATENATED MODULE: ./src/main.js









(axios_default()).defaults.baseURL = "https://bookbound-backend-production.up.railway.app";
new vue_runtime_esm/* default */.ZP({
  router: src_router,
  store: store,
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');

/***/ }),

/***/ 11:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/book_pages_opening.fc734b83.gif";

/***/ }),

/***/ 618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Ava.0a9d441e.jpg";

/***/ }),

/***/ 8885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Blake.97a31c00.jpg";

/***/ }),

/***/ 6591:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Nova.2908df29.jpg";

/***/ }),

/***/ 2806:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Vince.c74ffd39.jpg";

/***/ }),

/***/ 9315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/GUEST_a0eb4016-52b3-4bbe-a1b9-8c208c81bb42.d180a36d.jpg";

/***/ }),

/***/ 6520:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/aliceinwonderland.cdeaf4fc.jpg";

/***/ }),

/***/ 6316:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/anneofgreengables.f7eddece.jpg";

/***/ }),

/***/ 8779:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/dracula.da4c7f92.jpg";

/***/ }),

/***/ 3886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/frankenstein.b35188c1.jpg";

/***/ }),

/***/ 7019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/greatgatbsy.f585954d.jpg";

/***/ }),

/***/ 81:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/gulliverstravels.44571228.jpg";

/***/ }),

/***/ 2662:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/jekyllhyde.d5244895.jpg";

/***/ }),

/***/ 9525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/journeytocenterofearth.8a7ca5cf.jpg";

/***/ }),

/***/ 7125:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/littlewomen.261ef5e5.jpg";

/***/ }),

/***/ 1874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/peterrabbit.bb7116be.jpg";

/***/ }),

/***/ 7457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pictureofdoriangray.dcff33e7.jpg";

/***/ }),

/***/ 9749:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/theOdyssey.e60c4259.jpg";

/***/ }),

/***/ 3779:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/velvateenrabbit.b8aa3ec6.jpg";

/***/ }),

/***/ 1505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/winniethepooh.500b25c6.jpg";

/***/ }),

/***/ 9201:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/wutheringheights.e154b19d.jpg";

/***/ }),

/***/ 4222:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bedtime2.abc5ba45.png";

/***/ }),

/***/ 1835:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bookReview.d9ee07a1.png";

/***/ }),

/***/ 530:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/meet-author.5534cbd2.png";

/***/ }),

/***/ 6198:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/picnic2.cbfd3396.png";

/***/ }),

/***/ 9626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sharpened-transparent-logo.5864fbae.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/BookBound/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfinal_vue_capstone_seed"] = self["webpackChunkfinal_vue_capstone_seed"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], () => (__webpack_require__(2743)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.5c97dec1.js.map