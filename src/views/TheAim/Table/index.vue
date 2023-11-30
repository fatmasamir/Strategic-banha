<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { defineProps, defineEmits, computed, reactive } from "vue";
import TableLite from "@/components/TableLite/index.vue";
import VsudProgress from "@/components/VsudProgress.vue";
const { t } = useI18n();

const props = defineProps(["AimList", "name"]);
let emit = defineEmits(["DeleteItem"]);
const table = reactive({
  columns: [
    {
      label: t("Identification_number"),
      field: `id`,
      width: "3%",
      sortable: true,
      isKey: true,
    },
    {
      label: t("Strategic_objective"),
      field: "name",
      sortable: true,
    },
    {
      label: t("Relative_weight"),
      field: "rate",
      sortable: true,
    },
    {
      label: t("control"),
      field: "control",
      sortable: true,
    },
  ],
  totalRecordCount: computed(() => {
    return props.AimList.length;
  }),
  sortable: {
    order: "id",
    sort: "asc",
  },
});
// const checkedAll = ref(false);

// const openEdit = (index) => {
//   emit("openFormEdit", index);
// };
const DeleteItemfunc = (index) => {
  console.log("itemId", index);
  emit("DeleteItem", index);
};
</script>

<template>
  <div>
    <table-lite
      :is-static-mode="true"
      :columns="table.columns"
      :rows="props.AimList"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      :is-slot-mode="true"
    >
      <template v-slot:id="data">{{ data.value.id + 1 }} </template>
      <template v-slot:name="data">
        <p class="text-sm font-weight-bold mb-0">
          {{ data.value.name }}
        </p>
      </template>
      <template v-slot:rate="data">
        <div class="align-middle text-center">
          <div class="d-flex align-items-center justify-content-center">
            <span class="mx-2 text-xs font-weight-bold">
              {{ data.value.rate }}%</span
            >
            <div class="progress">
              <vsud-progress
                v-if="data.value.rate >= 50 && data.value.rate < 100"
                color="yellow"
                variant="gradient"
                :percentage="data.value.rate"
              />
              <vsud-progress
                v-if="data.value.rate == 100"
                color="success"
                variant="gradient"
                :percentage="data.value.rate"
              />
              <vsud-progress
                v-if="data.value.rate < 50"
                color="danger"
                variant="gradient"
                :percentage="data.value.rate"
              />
            </div>
          </div>
        </div>
      </template>
      <template v-slot:control="data">
        <button
          to="/"
          class="mx-4 trash-link btn btn-link m-0 p-0"
          @click="DeleteItemfunc(data.value.id)"
        >
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
        <router-link
          :to="
            '/strategic_plan/aim/' + props.name + '/edit-aim/' + data.value.id
          "
          class="edit-link m-0 p-0"
        >
          <i class="fa fa-edit" aria-hidden="true"></i> </router-link></template
    ></table-lite>
  </div>
</template>
<style scoped lang="scss">
.progress {
  width: 90%;
}
</style>
