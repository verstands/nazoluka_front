<template>
  <LayoutComponant>
    <div class="content-body rightside-event">
      <div class="container-fluid">
        <div class="row">
          <CountHomeVue />
          <UserConnectVue />
        </div>
      </div>
    </div>
  </LayoutComponant>
</template>

<script>
import LayoutComponant from "@/components/LayoutComponent.vue";
import UserConnectVue from "@/components/tables/UserConnect.vue";
import CountHomeVue from "@/components/views/CountHome.vue";
export default {
  name: "HomePage",
  components: {
    LayoutComponant,
    UserConnectVue,
    CountHomeVue,
  },
};
</script>

<style>
</style>