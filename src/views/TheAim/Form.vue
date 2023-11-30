<template>
  <div class="py-3 container-fluid">
    <div class="mt-4 card">
      <div class="pb-0 card-header text-end">
        <h5
          class="font-weight-bolder text-info text-gradient"
          v-if="!DepartmentId"
        >
          {{ t("AddAim") }}
        </h5>
        <h5 class="font-weight-bolder text-info text-gradient" v-else>
          {{ t("EditAim") }}
        </h5>
      </div>
      <div class="card-body mt-0 pt-0">
        <form role="form" class="text-end">
          <div class="row">
            <div class="col-6">
              <label> {{ t("Strategic_objective") }}</label>
              <vsud-input
                type="text"
                :placeholder="t('Strategic_objective')"
                name="Strategic_objective"
              />
            </div>
            <div class="col-6">
              <label> {{ t("Relative_weight") }}</label>
              <div class="content">
                <vsud-input
                  type="text"
                  :placeholder="t('Relative_weight')"
                  name="Relative_weight"
                /><span class="icon">%</span>
              </div>
            </div>
          </div>
          <div class="text-start" v-if="!DepartmentId">
            <vsud-button class="" variant="gradient" color="info"
              >إضافه</vsud-button
            >
          </div>
          <div class="text-start" v-else>
            <vsud-button class="" variant="gradient" color="info"
              >تعديل</vsud-button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import VsudButton from "@/components/VsudButton.vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
export default {
  components: {
    VsudInput,
    VsudButton,
  },
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const DepartmentId = route.params.id;
    return { t, DepartmentId };
  },
};
</script>
<style scoped lang="scss">
.span_img {
  background-image: linear-gradient(310deg, #4681b6 0%, #4681b6 100%);
}
.text-gradient.text-info,
.bg-gradient-info {
  background-image: linear-gradient(310deg, #447fb5, #447fb5);
}
label,
.form-label,
button {
  font-size: 15px;
}
label {
  margin-top: 5px;
}
.content {
  position: relative;
  .icon {
    position: absolute;
    top: 13px;
    left: 10px;
    color: #d7c5bd;
  }
}
</style>
