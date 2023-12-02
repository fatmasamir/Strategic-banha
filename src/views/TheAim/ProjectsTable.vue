<template>
  <div class="card mb-5 mt-4">
    <div class="card-header pb-0 d-flex w-100">
      <h6 class="main-color">{{ name }}</h6>
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
      <div class="table-responsive p-0">
        <Table
          :AimList="TheAim.AimList"
          @DeleteItem="DeleteItem"
          :name="name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import Table from "./Table/index.vue";
import VsudInput from "@/components/VsudInput.vue";
import VsudButton from "@/components/VsudButton.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { UseAimList } from "@/store/Aim/index.js";

export default {
  name: "ProjectsTable",
  components: {
    VsudButton,
    Table,
    VsudInput,
  },
  setup() {
    const { t } = useI18n();
    const TheAim = UseAimList();
    const route = useRoute();
    const router = useRouter();
    const name = route.params.name;
    const GoAdd = () => {
      router.push("/strategic_plan/aim/" + name + "/add-aim");
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
    let ComifallAimList = ref([]);
    const searchmovie = (e) => {
      let newAimList = ref([]);
      let customer = e.target.value;
      if (customer) {
        console.log("ComifallAimList.value", ComifallAimList.value);
        ComifallAimList.value.filter((item) => {
          if (item.name.toLowerCase().indexOf(customer.toLowerCase()) != -1) {
            newAimList.value.push(item);
            console.log("item", item);
          }
        });
        TheAim.AimList = newAimList.value;
      } else TheAim.AimList = ComifallAimList.value;
    };
    onMounted(() => {
      ComifallAimList.value = TheAim.AimList;
    });
    // watch(AimList, (value) => {
    //   console.log("AimList", value);
    //   allRepositories.value = value.brand;
    //   ComifallRepositories.value = value.brand;
    // });
    return { t, TheAim, DeleteItem, GoAdd, searchmovie, name };
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
