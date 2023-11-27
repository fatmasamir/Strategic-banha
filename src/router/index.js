import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Strategic_Plan from "@/views/Strategic_Plan/index.vue";
import TheAim from "@/views/TheAim/index.vue";
import Completion_reports from "@/views/Completion_reports/index.vue";
import User_management from "@/views/User_management/index.vue";
import Indicator_management from "@/views/Indicator_management/index.vue";
import Departments from "@/views/Departments/index.vue";
import FormDepartments from "@/views/Departments/Form.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/strategic_plan",
    children: [
      {
        path: "",
        name: "Strategic_Plan",
        component: Strategic_Plan,
      },
      {
        path: "aim/:name",
        name: "aim",
        component: TheAim,
      },
    ],
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/completion_reports",
    name: "Completion_reports",
    component: Completion_reports,
  },
  {
    path: "/user_management",
    name: "User_management",
    component: User_management,
  },
  {
    path: "/indicator_management",
    name: "Indicator_management",
    component: Indicator_management,
  },
  {
    path: "/departments",
    children: [
      {
        path: "",
        name: "Departments",
        component: Departments,
      },
      {
        path: "add-department",
        name: "AddDepartment",
        component: FormDepartments,
      },
      {
        path: "edit-department/:id",
        name: "editDepartment",
        component: FormDepartments,
      },
    ],
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
