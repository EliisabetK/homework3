import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import SignupView from "../views/SignupView.vue";
import LogIn from "../views/LogIn.vue";
import AddPost from "../views/AddPost.vue";
import SinglePost from "../views/SinglePost.vue";
import Contacts from "../views/Contacts.vue";
import auth from "../auth";

const routes = [
  
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/signupview",
    name: "SignupView",
    component: SignupView,
  },
  {
    path: "/mainview",
    name: "MainView",
    component: MainView,
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticate();
      if (!authResult) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticate();
      if (!authResult) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/singlepost/:postId",
    name: "SinglePost",
    component: SinglePost,
    bbeforeEnter: async (to, from, next) => {
      console.log('Before entering SinglePost route');
      let authResult = await auth.authenticate();
      console.log('Authentication result:', authResult);
      if (!authResult) {
        next('/login');
      } else {
        next();
      }
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/",
    redirect: "/login",
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let authResult = await auth.authenticate();
    if (!authResult) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
