<template>
  <nav aria-label="breadcrumb">
    <ol
      class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
      :class="$store.state.isRTL ? '' : ' me-sm-6'"
    >
      <li class="text-sm breadcrumb-item" :class="textWhite">
        <a
          v-if="$store.state.isRTL"
          :class="textWhite"
          class="opacity-5 ps-2"
          href="#"
          >لوحة الإداره</a
        >
        <a v-else :class="textWhite" class="opacity-8" href="#">Pages</a>
      </li>
      <li
        class="text-sm breadcrumb-item active"
        :class="textWhite ? 'text-white' : 'text-dark'"
        aria-current="page"
      >
        {{ t(currentPage) }}
      </li>
    </ol>
    <!-- <h6 class="mb-0 font-weight-bolder" :class="textWhite ? 'text-white' : ''">{{ currentPage }}</h6> -->
  </nav>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "BreadcrumbsComponent",
  props: {
    currentPage: {
      required: true,
      type: String,
      default: "",
    },
    textWhite: {
      type: String,
      default: "",
    },
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
<style>
.breadcrumb-item.active,
.breadcrumb-item a,
.breadcrumb-item + .breadcrumb-item::before {
  color: white !important;
}
</style>
