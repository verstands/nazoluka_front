<template>
  <LayoutComponentVue>
    <ViewHotelTableVue />
  </LayoutComponentVue>
</template>

<script>
import ViewHotelTableVue from "@/components/tables/ViewHotelTable.vue";
import LayoutComponentVue from "@/components/LayoutComponent.vue";
export default {
  name: "ViewHotel",
  components: {
    ViewHotelTableVue,
    LayoutComponentVue,
  },
};
</script>

<style>
</style>