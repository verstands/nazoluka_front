<template>
  <div id="preloader">
    <div class="sk-three-bounce">
      <div class="sk-child sk-bounce1"></div>
      <div class="sk-child sk-bounce2"></div>
      <div class="sk-child sk-bounce3"></div>
    </div>
  </div>
  <div id="main-wrapper">
    <div class="nav-header">
      <a href="index.php" class="brand-logo">
        <img class="logo-abbr" src="images/icon-02.png" alt="" />
        <img
          class="brand-title"
          src="images/logo-01.png"
          style="width: 150px !important"
        />
      </a>
      <div class="nav-control">
        <div class="hamburger">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </div>
    <ChatboxLayoutVue />
    <MenuLayoutVue />
    <SidebarLayoutVue />
    <slot />
    <FooterLayoutVue />
  </div>
</template>

<script>
import ChatboxLayoutVue from "./ChatboxLayout.vue";
import FooterLayoutVue from "./FooterLayout.vue";
import MenuLayoutVue from "./MenuLayout.vue";
import SidebarLayoutVue from "./SidebarLayout.vue";
export default {
  name: "LayoutComponant",
  components: {
    ChatboxLayoutVue,
    MenuLayoutVue,
    SidebarLayoutVue,
    FooterLayoutVue,
  },
};
</script>

<style>
</style>