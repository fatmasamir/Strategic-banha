<template>
  <div class="card mb-5 mt-4">
    <div class="card-header pb-0 d-flex w-100">
      <h6 class="main-color">{{ t("Strategic_Plan") }}</h6>
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
          :StrategicPlan="StrategicPlanList.Strategic_Plan"
          @DeleteItem="DeleteItem"
        />
      </div>
      <!-- <div class="text-center" v-else>
        <div class="card mt-3">
          <div class="card-body">
            <div
              class="spinner-border text-success"
              style="width: 30px; height: 30px; margin: 20px"
              role="status"
            ></div>
          </div>
        </div>
      </div> -->
      <!-- <div class="NotFound" v-else>NotFound ..</div> -->
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
import { UseStrategicPlan } from "@/store/StrategicPlan/index.js";

export default {
  name: "ProjectsTable",
  components: {
    VsudButton,
    Table,
    VsudInput,
  },
  setup() {
    const { t } = useI18n();
    const StrategicPlanList = UseStrategicPlan();
    const router = useRouter();
    const GoAdd = () => {
      router.push("/strategic_plan/add-strategic");
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
    let ComifallStrategic_Plan = ref([]);
    const searchmovie = (e) => {
      let newStrategic_Plan = ref([]);
      let customer = e.target.value;
      if (customer) {
        console.log(
          "ComifallStrategic_Plan.value",
          ComifallStrategic_Plan.value
        );
        ComifallStrategic_Plan.value.filter((item) => {
          if (item.name.toLowerCase().indexOf(customer.toLowerCase()) != -1) {
            newStrategic_Plan.value.push(item);
            console.log("item", item);
          }
        });
        StrategicPlanList.Strategic_Plan = newStrategic_Plan.value;
      } else StrategicPlanList.Strategic_Plan = ComifallStrategic_Plan.value;
    };
    onMounted(() => {
      ComifallStrategic_Plan.value = StrategicPlanList.Strategic_Plan;
    });
    // watch(Strategic_Plan, (value) => {
    //   console.log("Strategic_Plan", value);
    //   allRepositories.value = value.brand;
    //   ComifallRepositories.value = value.brand;
    // });
    return { t, StrategicPlanList, DeleteItem, GoAdd, searchmovie };
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
