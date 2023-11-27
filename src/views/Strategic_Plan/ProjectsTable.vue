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
        <Table :StrategicPlan="Strategic_Plan" @DeleteItem="DeleteItem" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from "./Table/index.vue";
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
    Table,
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
      {
        id: 4,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 70,
      },
      {
        id: 5,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 70,
      },
      {
        id: 6,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 70,
      },
      {
        id: 7,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 70,
      },
      {
        id: 8,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 70,
      },
      {
        id: 9,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 70,
      },
      {
        id: 10,
        name: "طلاب وخريجون متميزون وقادرون على المنافسة والابتكار",
        rate: 70,
      },
    ]);
    const GoAdd = () => {
      router.push("/departments/add-department");
    };
    const DeleteItem = (itemId) => {
      console.log("itemId", itemId);
      Swal.fire({
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        title: "هل تريد حذف العنصر !" + itemId,
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
    return { t, Strategic_Plan, DeleteItem, GoAdd };
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
