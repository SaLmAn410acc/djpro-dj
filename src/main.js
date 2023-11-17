/* eslint-disable import/order */
import "@/@iconify/icons-bundle";
import App from "@/App.vue";
import layoutsPlugin from "@/plugins/layouts";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from "@/plugins/webfontloader";
import router from "@/router";
import moment from "moment";
import "@core/scss/template/index.scss";
import "@styles/styles.scss";
import { createPinia } from "pinia";
import { createApp } from "vue";
import axios from "axios";
import mitt from "mitt";
import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "https://onthegodjpro.azurewebsites.net/api/";

loadFonts();

// Create vue app
const app = createApp(App);

// Use plugins
app.use(vuetify);
app.use(createPinia());
app.use(router);
app.use(layoutsPlugin);
app.use(LoadingPlugin, {
  color: "#7367F0",
  loader: "spinner",
  width: 64,
  height: 64,
  backgroundColor: "rgba(0,0,0,0.1)",
  opacity: 1,
  isFullPage: true,
  lockScroll: true,
  transition: "scale-in-out",
});
app.config.globalProperties.$moment = moment;

app.provide("emitter", mitt());
app.provide("loadingOverlay", app.config.globalProperties.$loading);

// Mount vue app
app.mount("#app");
