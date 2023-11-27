<template>
  <div class="card mb-5 mt-4">
    <div class="card-header pb-0">
      <h6 class="main-color">{{ name }}</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table
          class="table align-items-center justify-content-center mb-0 text-center"
        >
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                {{ t("Identification_number") }}
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                {{ t("Strategic_objective") }}
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
              >
                {{ t("Relative_weight") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">1</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">
                  طلاب وخريجون متميزون وقادرون على المنافسة والابتكار
                </p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="mx-2 text-xs font-weight-bold">60%</span>
                  <div>
                    <vsud-progress
                      color="info"
                      variant="gradient"
                      percentage="60"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">2</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">
                  طلاب وخريجون متميزون وقادرون على المنافسة والابتكار
                </p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="mx-2 text-xs font-weight-bold">100%</span>
                  <div>
                    <vsud-progress
                      color="success"
                      variant="gradient"
                      percentage="100"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">3</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">
                  طلاب وخريجون متميزون وقادرون على المنافسة والابتكار
                </p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="mx-2 text-xs font-weight-bold">60%</span>
                  <div>
                    <vsud-progress
                      color="info"
                      variant="gradient"
                      percentage="60"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <!-- <tr>
              <td>
                <div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">2</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">
                  طلاب وخريجون متميزون وقادرون على المنافسة والابتكار
                </p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">30%</span>
                  <div>
                    <vsud-progress
                      color="danger"
                      variant="gradient"
                      percentage="30"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">3</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">
                  طلاب وخريجون متميزون وقادرون على المنافسة والابتكار
                </p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">100%</span>
                  <div>
                    <vsud-progress
                      color="success"
                      variant="gradient"
                      percentage="100"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">1</h6>
                  </div>
                </div>
              </td>
              <td>
                <router-link to="/">
                  <p class="text-sm font-weight-bold mb-0">
                    طلاب وخريجون متميزون وقادرون على المنافسة والابتكار
                  </p></router-link
                >
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">60%</span>
                  <div>
                    <vsud-progress
                      color="info"
                      variant="gradient"
                      percentage="60"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">2</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">
                  طلاب وخريجون متميزون وقادرون على المنافسة والابتكار
                </p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">30%</span>
                  <div>
                    <vsud-progress
                      color="danger"
                      variant="gradient"
                      percentage="30"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">3</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">
                  طلاب وخريجون متميزون وقادرون على المنافسة والابتكار
                </p>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">100%</span>
                  <div>
                    <vsud-progress
                      color="success"
                      variant="gradient"
                      percentage="100"
                    />
                  </div>
                </div>
              </td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import VsudProgress from "@/components/VsudProgress.vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

export default {
  name: "ProjectsTable",
  components: {
    VsudProgress,
  },
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const name = route.params.name;
    return { t, name };
  },
};
</script>
