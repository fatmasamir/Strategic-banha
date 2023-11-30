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
        <Table :AimList="AimList" @DeleteItem="DeleteItem" :name="name" />
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
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import Table from "./Table/index.vue";
import VsudInput from "@/components/VsudInput.vue";
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
    const route = useRoute();
    const router = useRouter();
    const name = route.params.name;
    const AimList = ref([
      {
        id: 0,
        name: "طلاب 123 وخريجون متميزون وقادرون على المنافسة والابتكار",
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
        AimList.value = newAimList.value;
      } else AimList.value = ComifallAimList.value;
    };
    onMounted(() => {
      ComifallAimList.value = AimList.value;
    });
    // watch(AimList, (value) => {
    //   console.log("AimList", value);
    //   allRepositories.value = value.brand;
    //   ComifallRepositories.value = value.brand;
    // });
    return { t, AimList, DeleteItem, GoAdd, searchmovie, name };
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
