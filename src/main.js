import { createApp } from "vue";
import App from "./App.vue";
import "../public/global.css";
import { auth_router } from "./routes";

const app = createApp(App);

app.use(auth_router);
app.mount("#app");
