import { createRouter, createWebHistory } from "vue-router";
import FormBuilder from "./components/builder/FormBuilder.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/build", component: FormBuilder }],
});

export default router;
