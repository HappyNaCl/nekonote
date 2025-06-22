import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import AdminLayout from "./components/layout/AdminLayout.vue";
import AdminDashboard from "./components/pages/admin/AdminDashboard.vue";

const routes = [
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "dashboard",
        component: AdminDashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
