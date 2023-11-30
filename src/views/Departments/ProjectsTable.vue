<template>
  <div class="card mb-5 mt-4">
    <div class="card-header pb-0 d-flex w-100">
      <h6 class="main-color">{{ t("Implementing_agencies") }}</h6>
      <div>
        <div class="m-2 search_div">
          <vsud-input
            type="text"
            :placeholder="t('Search')"
            name="Search"
            @input="searchmovie"
          /><i class="fa fa-search"></i>
        </div>
        <vsud-button @click="GoAdd" variant="gradient" color="success"
          >إضافه</vsud-button
        >
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <Table :Departments="Departments" @DeleteItem="DeleteItem" />
    </div>
  </div>
</template>

<script>
import Table from "./Table/index.vue";
import VsudInput from "@/components/VsudInput.vue";
import { useI18n } from "vue-i18n";
import VsudButton from "@/components/VsudButton.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

export default {
  name: "ProjectsTable",
  components: {
    VsudButton,
    Table,
    VsudInput,
  },
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const Departments = ref([
      {
        id: 0,
        Department: "إداره 1",
      },
      {
        id: 1,
        Department: "إداره 2",
      },
      {
        id: 2,
        Department: "إداره 3",
      },
      {
        id: 3,
        Department: "إداره 4",
      },
      {
        id: 4,
        Department: "إداره 5",
      },
    ]);
    const GoAdd = () => {
      router.push("/Departments/add-department");
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
    let ComifallDepartments = ref([]);
    const searchmovie = (e) => {
      let newDepartments = ref([]);
      let customer = e.target.value;
      if (customer) {
        console.log("ComifallDepartments.value", ComifallDepartments.value);
        ComifallDepartments.value.filter((item) => {
          if (item.name.toLowerCase().indexOf(customer.toLowerCase()) != -1) {
            newDepartments.value.push(item);
            console.log("item", item);
          }
        });
        Departments.value = newDepartments.value;
      } else Departments.value = ComifallDepartments.value;
    };
    onMounted(() => {
      ComifallDepartments.value = Departments.value;
    });
    // watch(Departments, (value) => {
    //   console.log("Departments", value);
    //   allRepositories.value = value.brand;
    //   ComifallRepositories.value = value.brand;
    // });
    return { t, Departments, DeleteItem, GoAdd, searchmovie };
  },
};
</script>
<style scoped lang="scss">
.card .card-header {
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100% !important;
}
.card .card-header {
  .search_div {
    display: inline-block;
    position: relative;
    width: 280px;
    i {
      position: absolute;
      top: 15px;
      left: 10px;
      color: rgba(0, 0, 0, 0.156);
    }
  }
}
</style>
