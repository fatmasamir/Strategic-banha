<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <projects-table />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsTable from "./ProjectsTable.vue";

export default {
  name: "TablesPage",
  components: {
    ProjectsTable,
  },
};
</script>
