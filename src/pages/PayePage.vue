<template>
  <LayoutComponentVue>
    <div class="content-body">
      <div class="container-fluid">
        <HookPayeViewVue />
        <PayeTableauVue />
      </div>
    </div>
  </LayoutComponentVue>
</template>

<script>
import HookPayeViewVue from "@/components/views/HookPayeView.vue";
import PayeTableauVue from "@/components/tables/PayeTableau.vue";
import LayoutComponentVue from "@/components/LayoutComponent.vue";
export default {
  name: "PayePage",
  components: {
    LayoutComponentVue,
    PayeTableauVue,
    HookPayeViewVue,
  },
};
</script>

<style>
</style>