import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Dashboard.vue";
// import Tables from "@/views/Tables.vue";
// import Billing from "@/views/Billing.vue";
// import VirtualReality from "@/views/VirtualReality.vue";
// import Profile from "@/views/Profile.vue";
// import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
// import SignUp from "@/views/SignUp.vue";
import Strategic_Plan from "@/views/Strategic_Plan/index.vue";
import FormStrategic_Plan from "@/views/Strategic_Plan/Form.vue";
import TheAim from "@/views/TheAim/index.vue";
import FormTheAim from "@/views/TheAim/Form.vue";
// import Completion_reports from "@/views/Completion_reports/index.vue";
// import User_management from "@/views/User_management/index.vue";
// import Indicator_management from "@/views/Indicator_management/index.vue";
import Departments from "@/views/Departments/index.vue";
import FormDepartments from "@/views/Departments/Form.vue";

const constantRouterMap = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadcrumb: [
        {
          name: "Home",
        },
      ],
    },
  },
  {
    path: "/strategic_plan",
    children: [
      {
        path: "",
        name: "Strategic_Plan",
        component: Strategic_Plan,
        beforeEnter(to, from) {
          document.title = `  الخطه الاستراتيجية - الخطه الاستراتيجية`;
        },
        meta: {
          breadcrumb: [
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Strategic_Plan",
            },
          ],
        },
      },
      {
        path: "aim/:name",
        children: [
          {
            path: "",
            name: "aim",
            component: TheAim,
            beforeEnter(to, from) {
              document.title = `  الغايه  - الخطه الاستراتيجية`;
            },
            meta: {
              breadcrumb: [
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "Strategic_Plan",
                  link: "/strategic_plan",
                },
                {
                  name: "aim",
                },
              ],
            },
          },
          {
            path: "add-aim",
            name: "AddAim",
            component: FormTheAim,
            beforeEnter(to, from) {
              document.title = `  إضافه الغايه  - الخطه الاستراتيجية`;
            },

            meta: {
              breadcrumb: [
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "Strategic_Plan",
                  link: "/strategic_plan",
                },
                {
                  name: "AddAim",
                },
              ],
            },
          },
          {
            path: "edit-aim/:id",
            name: "EditAim",
            component: FormTheAim,
            beforeEnter(to, from) {
              document.title = `   تعديل الغايه - الخطه الاستراتيجية`;
            },
            meta: {
              breadcrumb: [
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "Strategic_Plan",
                  link: "/strategic_plan",
                },
                {
                  name: "EditAim",
                },
              ],
            },
          },
        ],
      },
      {
        path: "add-strategic/:name",
        name: "AddStrategic_Plan",
        component: FormStrategic_Plan,
        beforeEnter(to, from) {
          document.title = `  إضافه خطه  - الخطه الاستراتيجية`;
        },
        meta: {
          breadcrumb: [
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Strategic_Plan",
              link: "/strategic_plan",
            },
            {
              name: "AddStrategic_Plan",
            },
          ],
        },
      },
      {
        path: "edit-strategic/:id",
        name: "editStrategic_Plan",
        component: FormStrategic_Plan,
        beforeEnter(to, from) {
          document.title = `  إضافه خطه  - الخطه الاستراتيجية`;
        },
        meta: {
          breadcrumb: [
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Strategic_Plan",
              link: "/strategic_plan",
            },
            {
              name: "editStrategic_Plan",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/departments",
    children: [
      {
        path: "",
        name: "Departments",
        component: Departments,
        beforeEnter(to, from) {
          document.title = `   الإدارات - الخطه الاستراتيجية`;
        },
        meta: {
          breadcrumb: [
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Departments",
            },
          ],
        },
      },
      {
        path: "add-department",
        name: "AddDepartment",
        component: FormDepartments,
        beforeEnter(to, from) {
          document.title = `  إضافه إداره  - الخطه الاستراتيجية`;
        },

        meta: {
          breadcrumb: [
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Departments",
              link: "/departments",
            },
            {
              name: "AddDepartment",
            },
          ],
        },
      },
      {
        path: "edit-department/:id",
        name: "editDepartment",
        component: FormDepartments,
        beforeEnter(to, from) {
          document.title = `  تعديل إداره  - الخطه الاستراتيجية`;
        },
        meta: {
          breadcrumb: [
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Departments",
              link: "/departments",
            },
            {
              name: "editDepartment",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
    meta: {
      breadCrumb: "Sign Up",
    },
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   component: Tables,
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   component: Billing,
  // },
  // {
  //   path: "/completion_reports",
  //   name: "Completion_reports",
  //   component: Completion_reports,
  // },
  // {
  //   path: "/user_management",
  //   name: "User_management",
  //   component: User_management,
  // },
  // {
  //   path: "/indicator_management",
  //   name: "Indicator_management",
  //   component: Indicator_management,
  // },
  // {
  //   path: "/virtual-reality",
  //   name: "Virtual Reality",
  //   component: VirtualReality,
  // },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: Profile,
  // },
  // {
  //   path: "/rtl-page",
  //   name: "Rtl",
  //   component: Rtl,
  // },

  // {
  //   path: "/sign-up",
  //   name: "Sign Up",
  //   component: SignUp,
  //   meta: {
  //     breadCrumb: "Sign Up",
  //   },
  // },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  mode: "hash",
  routes: constantRouterMap,
  linkActiveClass: "active",
});

export default router;
