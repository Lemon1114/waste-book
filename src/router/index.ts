
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Money from "@/views/Money.vue";
import Tag from "@/views/Tag.vue";
import Statistics from "@/views/Statistics.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    redirect:'/money',
  },
  {
    path: "/money",
    name: "money",
    component: Money,
  },
  {
    path: "/label",
    name: "label",
    component: Tag,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/statistics",
    name: "statistics",
    component: Statistics,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
