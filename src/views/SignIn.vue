<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            >
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-end">
                  <h4 class="font-weight-bolder text-info text-gradient">
                    {{ t("Strategic_mess") }}
                  </h4>
                </div>
                <div class="card-body p-2">
                  <form role="form" class="text-end">
                    <label>{{ t("Strategic_input") }}</label>
                    <select class="form-control">
                      <option value="Strategic_input">
                        {{ t("Strategic_input") }}
                      </option>
                      <option value="Strategic_input">
                        {{ t("Strategic_input") }}
                      </option>
                    </select>
                    <label>{{ t("Job_number") }}</label>
                    <vsud-input
                      type="text"
                      :placeholder="t('Job_number')"
                      name="Job_number"
                    />
                    <label>{{ t("password") }}</label>
                    <vsud-input
                      type="password"
                      name="password"
                      :placeholder="t('password')"
                    />
                    <div class="text-center">
                      <vsud-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="info"
                        full-width
                        >دخول</vsud-button
                      >
                    </div>
                  </form>
                </div>
                <!-- <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <a
                      href="javascript:;"
                      class="text-info text-gradient font-weight-bold"
                      >Sign up</a
                    >
                  </p>
                </div> -->
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute start-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="
                  background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
                  background-size: cover;
                "
              >
                <span class="mask span_img opacity-6"></span>
                <!-- <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >
                  "Attention is the new currency"
                </h4>
                <p class="text-white position-relative">
                  The more effortless the writing looks, the more effort the
                  writer actually put into the process.
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import VsudInput from "@/components/VsudInput.vue";
import VsudButton from "@/components/VsudButton.vue";
import bgImg from "@/assets/img/curved-images/curved9.jpg";
import { useI18n } from "vue-i18n";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "SigninPage",
  components: {
    Navbar,
    AppFooter,
    VsudInput,
    VsudButton,
  },
  data() {
    return {
      bgImg,
    };
  },
  beforeMount() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
<style scoped>
.span_img {
  background-image: linear-gradient(310deg, #4681b6 0%, #4681b6 100%);
}
.text-gradient.text-info,
.bg-gradient-info {
  background-image: linear-gradient(310deg, #447fb5, #447fb5);
}
label,
.form-label,
button {
  font-size: 15px;
}
label {
  margin-top: 5px;
}
</style>
