import { createRouter, createWebHistory } from "vue-router";
import FormBuilder from "./components/builder/FormBuilder.vue";
import FormList from "./components/list/FormList.vue";
import SubmitForm from "./components/form/SubmitForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/list" },
    {
      path: "/list",
      component: FormList,
    },
    { path: "/form/:formId", component: SubmitForm, props: true },
    { path: "/build", component: FormBuilder },
  ],
});

export default router;
