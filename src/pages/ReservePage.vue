<template>
  <LayoutComponentVue>
    <div class="content-body">
      <div class="container-fluid">
      <HookReserveViewVue />
      <ReserveTableauVue />
      </div>
    </div>
  </LayoutComponentVue>
</template>

<script>
import HookReserveViewVue from "@/components/views/HookReserveView.vue";
import ReserveTableauVue from "@/components/tables/ReserveTableau.vue";
import LayoutComponentVue from "@/components/LayoutComponent.vue";
export default {
  name: "ReservePage",
  components: {
    HookReserveViewVue,
    ReserveTableauVue,
    LayoutComponentVue,
  },
};
</script>

<style>
</style>