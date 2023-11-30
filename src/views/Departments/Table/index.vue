<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { defineProps, defineEmits, computed, reactive } from "vue";
import TableLite from "@/components/TableLite/index.vue";
import VsudProgress from "@/components/VsudProgress.vue";
const { t } = useI18n();

const props = defineProps(["Departments"]);
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
      label: t("Departments"),
      field: "Department",
      sortable: true,
    },
    {
      label: t("control"),
      field: "control",
      sortable: true,
    },
  ],
  totalRecordCount: computed(() => {
    return props.Departments.length;
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
      :rows="props.Departments"
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
      <template v-slot:control="data">
        <button
          to="/"
          class="mx-4 trash-link btn btn-link m-0 p-0"
          @click="DeleteItemfunc(data.value.id)"
        >
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
        <router-link
          :to="'/Departments/edit-department/' + data.value.id"
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
