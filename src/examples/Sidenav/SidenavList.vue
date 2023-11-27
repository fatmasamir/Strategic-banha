<template>
  <div
    id="sidenav-collapse-main"
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
  >
    <ul class="navbar-nav">
      <!-- <li class="nav-item">
        <sidenav-collapse nav-text="الصفحه الرئسيه" :to="{ name: 'Home' }">
          <template #icon>
            <icon name="dashboard" />
          </template>
        </sidenav-collapse>
      </li> -->
      <li class="nav-item">
        <sidenav-collapse
          :nav-text="t('Strategic_Plan')"
          :to="{ name: 'Strategic_Plan' }"
        >
          <template #icon>
            <icon name="tables" />
          </template>
        </sidenav-collapse>
      </li>
      <!-- <li class="nav-item">
        <sidenav-collapse
          :nav-text="t('Indicator_management')"
          :to="{ name: 'Indicator_management' }"
        >
          <template #icon>
            <icon name="tables" />
          </template>
        </sidenav-collapse>
      </li> -->
      <li class="nav-item">
        <sidenav-collapse
          :nav-text="t('Departments')"
          :to="{ name: 'Departments' }"
        >
          <template #icon>
            <icon name="tables" />
          </template>
        </sidenav-collapse>
        <!-- </li>
      <li class="nav-item">
        <sidenav-collapse
          :nav-text="t('User_management')"
          :to="{ name: 'User_management' }"
        >
          <template #icon>
            <icon name="tables" />
          </template>
        </sidenav-collapse>
      </li> -->
        <!-- <li class="nav-item">
        <sidenav-collapse
          :nav-text="t('Completion_reports')"
          :to="{ name: 'Completion_reports' }"
        >
          <template #icon>
            <icon name="tables" />
          </template>
        </sidenav-collapse>
      </li> -->
        <!-- <li class="nav-item">
        <sidenav-collapse nav-text="الجداول" :to="{ name: 'Tables' }">
          <template #icon>
            <icon name="tables" />
          </template>
        </sidenav-collapse>
      </li> -->
        <!--    <li class="nav-item">
        <sidenav-collapse nav-text="Billing" :to="{ name: 'Billing' }">
          <template #icon>
            <icon name="billing" />
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse nav-text="Virtual Reality" :to="{ name: 'Virtual Reality' }">
          <template #icon>
            <icon name="virtual-reality" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="RTL" :to="{ name: 'Rtl' }">
          <template #icon>
            <icon name="rtl-page" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="$store.state.isRTL ? 'me-4' : 'ms-2'"
        >PAGES</h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Profile" :to="{ name: 'Profile' }">
          <template #icon>
            <icon name="customer-support" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Sign In" :to="{ name: 'Sign In' }">
          <template #icon>
            <icon name="sign-in" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Sign Up" :to="{ name: 'Sign Up' }">
          <template #icon>
            <icon name="sign-up" />
          </template>
        </sidenav-collapse>
      </li> -->
      </li>
    </ul>
  </div>
</template>
<script>
import Icon from "@/components/Icon.vue";
import SidenavCollapse from "./SidenavCollapse.vue";
import { useI18n } from "vue-i18n";
// import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  components: {
    Icon,
    SidenavCollapse,
    // SidenavCard,
  },
  props: {
    cardBg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      title: "Vite Soft UI Dashboard",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
<style>
.sidenav[data-color="success"]
  .navbar-nav
  > .nav-item
  > .nav-link.active
  .icon {
  background-image: linear-gradient(
    310deg,
    #4681b6 0%,
    #4681b6 100%
  ) !important;
}
</style>
