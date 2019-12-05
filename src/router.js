import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "./views/DestinationDetails.vue"
      ),
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "./views/ExperienceDetails.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes
});

export default router;
