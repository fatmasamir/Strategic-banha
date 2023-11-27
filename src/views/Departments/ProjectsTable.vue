<template>
  <div class="card mb-5 mt-4">
    <div class="card-header pb-0 d-flex w-100">
      <h6 class="main-color">{{ t("Implementing_agencies") }}</h6>
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
                #
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                {{ t("Departments") }}
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
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import VsudButton from "@/components/VsudButton.vue";
import { useToast } from "vue-toastification";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

export default {
  name: "ProjectsTable",
  components: {
    VsudButton,
  },
  setup() {
    const { t } = useI18n();
    const toast = useToast();
    const router = useRouter();
    const Strategic_Plan = ref([
      {
        id: 0,
        name: "شبكه المعلومات الرقميه بالجامعة",
      },
      {
        id: 1,
        name: "شبكه المعلومات الرقميه بالجامعة",
      },
      {
        id: 2,
        name: "شبكه المعلومات الرقميه بالجامعة",
      },
      {
        id: 3,
        name: "شبكه المعلومات الرقميه بالجامعة",
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
    return { t, Strategic_Plan, toast, showAlert, GoAdd };
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
