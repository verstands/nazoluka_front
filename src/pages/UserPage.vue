<template>
  <LayoutComponentVue>
    <div class="content-body">
      <div class="container-fluid">
        <HookViewVue />
        <UserTableVue />
      </div>
    </div>
  </LayoutComponentVue>
</template>

<script>
import UserTableVue from "@/components/tables/UserTable.vue";
import HookViewVue from "@/components/views/HookView.vue";
import LayoutComponentVue from "@/components/LayoutComponent.vue";
export default {
  name: "UserPage",
  components: {
    UserTableVue,
    HookViewVue,
    LayoutComponentVue,
  },
};
</script>

<style>
</style>