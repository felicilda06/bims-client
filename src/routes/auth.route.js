import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Landing from "../components/Landing.vue";
import { createRouter, createWebHistory } from "vue-router";

export const auth_routes = [
  {
    name: "sign-in",
    path: "/sign-in",
    component: Login,
  },
  {
    name: "landing",
    path: "/",
    component: Landing,
  },
  {
    name: "forgot",
    path: "/forgot-password",
    component: Landing,
  },
  {
    name: "sign-up",
    path: "/sign-up",
    component: Register,
  },
];

export const auth_router = createRouter({
  history: createWebHistory(),
  routes: auth_routes,
});
