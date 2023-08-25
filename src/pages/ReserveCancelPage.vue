<template>
  <LayoutComponentVue>
    <div class="content-body">
      <div class="container-fluid">
        <HookReserveCancelViewVue />
        <ReserveCancelTableauVue />
      </div>
    </div>
  </LayoutComponentVue>
</template>

<script>
import LayoutComponentVue from "@/components/LayoutComponent.vue";
import HookReserveCancelViewVue from "@/components/views/HookReserveCancelView.vue";
import ReserveCancelTableauVue from "@/components/tables/ReserveCancelTableau.vue";
export default {
  name: "ReserveCancelPage",
  components: {
    LayoutComponentVue,
    HookReserveCancelViewVue,
    ReserveCancelTableauVue,
  },
};
</script>

<style>
</style>