import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import House from "../views/House.vue";
import All from '../views/All.vue';
import Counter from '../views/Counter.vue';
import MyCounter from '../views/MyCounter.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/house",
      name: "house",
      component: House,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/all",
      name: "all",
      component: All,
    },
    {
      path: "/counter",
      name: "counter",
      component: Counter,
    },
    {
      path: "/mycounter",
      name: "mycounter",
      component: MyCounter,
    },
  ],
});

export default router;
