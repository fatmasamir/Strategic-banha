<template>
  <div class="card mb-5 mt-4">
    <div class="card-header pb-0 d-flex w-100">
      <h6 class="main-color">{{ t("Strategic_Plan") }}</h6>
      <vsud-button @click="GoAdd" variant="gradient" color="success"
        >إضافه</vsud-button
      >
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
                {{ t("aim") }}
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
              >
                {{ t("Relative_weight") }}
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Strategic in Strategic_Plan" :key="Strategic.id">
              <td>
                <div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{ Strategic.id + 1 }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <router-link :to="'/strategic_plan/aim/' + Strategic.name">
                  <p class="text-sm font-weight-bold mb-0">
                    {{ Strategic.name }}
                  </p></router-link
                >
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="mx-2 text-xs font-weight-bold">
                    {{ Strategic.rate }}%</span
                  >
                  <div>
                    <vsud-progress
                      v-if="Strategic.rate >= 50 && Strategic.rate < 100"
                      color="info"
                      variant="gradient"
                      :percentage="Strategic.rate"
                    />
                    <vsud-progress
                      v-if="Strategic.rate == 100"
                      color="success"
                      variant="gradient"
                      :percentage="Strategic.rate"
                    />
                    <vsud-progress
                      v-if="Strategic.rate < 50"
                      color="danger"
                      variant="gradient"
                      :percentage="Strategic.rate"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <button
                  to="/"
                  class="mx-4 trash-link btn btn-link m-0 p-0"
                  @click="showAlert"
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                <router-link
                  :to="'/departments/edit-department/' + Strategic.id"
                  class="edit-link m-0 p-0"
                >
                  <i class="fa fa-edit" aria-hidden="true"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import VsudProgress from "@/components/VsudProgress.vue";
import { useI18n } from "vue-i18n";
import VsudButton from "@/components/VsudButton.vue";
import { ref } from "vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

export default {
  name: "ProjectsTable",
  components: {
    VsudProgress,
    VsudButton,
  },
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const Strategic_Plan = ref([
      {
        id: 0,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 100,
      },
      {
        id: 1,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 50,
      },
      {
        id: 2,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 30,
      },
      {
        id: 3,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 70,
      },
    ]);
    const GoAdd = () => {
      router.push("/departments/add-department");
    };
    const showAlert = () => {
      Swal.fire({
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        title: "هل تريد حذف العنصر !",
        confirmButtonText: "حذف",
        cancelButtonText: "إلغاء",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            icon: "success",
          });
        }
      });
    };
    return { t, Strategic_Plan, showAlert, GoAdd };
  },
};
</script>
<style scoped>
.card .card-header {
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100% !important;
}
</style>
