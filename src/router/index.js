import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FundalSignup from "../views/Signup.vue";
import FundalLogin from "../views/LoginView.vue";
import FundalDashboard from "../views/dashboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: FundalSignup,
  },
  {
    path: "/login",
    name: "login",
    component: FundalLogin,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: FundalDashboard,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
