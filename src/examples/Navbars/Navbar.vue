<template>
  <nav
    v-bind="$attrs"
    id="navbarBlur"
    class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :current-page="currentRouteName" :text-white="textWhite" />
      <div
        id="navbar"
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="$store.state.isRTL ? 'px-0' : 'me-sm-4'"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        ></div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <router-link
              :to="{ name: 'Sign In' }"
              class="px-0 nav-link font-weight-bold"
              :class="textWhite ? textWhite : 'text-body'"
            >
              <i
                class="fa fa-user"
                :class="$store.state.isRTL ? 'ms-sm-2' : 'me-sm-1'"
              ></i>
              <span>تسحيل الدخول</span>
            </router-link>
          </li>
          <!-- <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a
              id="iconNavbarSidenav"
              href="#"
              class="p-0 nav-link text-body"
              @click="toggleSidebar"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li> -->
          <!-- <li class="px-3 nav-item d-flex align-items-center">
            <a
              class="p-0 nav-link"
              :class="textWhite ? textWhite : 'text-body'"
              @click="toggleConfigurator"
            >
              <i class="cursor-pointer fa fa-cog fixed-plugin-button-nav"></i>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapMutations, mapActions } from "vuex";
import { useI18n } from "vue-i18n";

export default {
  name: "NavbarComponent",

  components: {
    Breadcrumbs,
  },
  props: {
    minNav: {
      type: Function,
      default: () => {},
    },
    textWhite: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  created() {
    this.minNav;
  },
  updated() {
    const navbar = document.getElementById("navbarBlur");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10 && this.$store.state.isNavFixed) {
        navbar.classList.add("blur");
        navbar.classList.add("position-sticky");
        navbar.classList.add("shadow-blur");
      } else {
        navbar.classList.remove("blur");
        navbar.classList.remove("position-sticky");
        navbar.classList.remove("shadow-blur");
      }
    });
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    },
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
<style lang="scss">
.navbar-main .navbar-nav .nav-link {
  color: white !important;
}
</style>
