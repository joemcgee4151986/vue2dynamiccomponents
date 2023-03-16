import Vue from "vue";
import App from "./App.vue";
import Announcement from "./Announcement.vue";
import Article from "./news/components/Article.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.component("announcement", Announcement);
Vue.component("appArticle", Article);

new Vue({
  el: "#app",
  render: h => h(App)
});
