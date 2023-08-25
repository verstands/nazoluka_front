<template>
  <div class="deznav">
    <div class="deznav-scroll">
      <ul class="metismenu" id="menu">
        <li>
          <a href="/home" class="ai-icon" aria-expanded="false">
            <i class="flaticon-381-home-2"></i>
            <span class="nav-text">HOME</span>
          </a>
        </li>
        <li>
          <a href="/users" class="ai-icon" aria-expanded="false">
            <i class="flaticon-381-user-9"></i>
            <span class="nav-text">LISTE USERS</span>
          </a>
        </li>

        <li>
          <a
            class="has-arrow ai-icon"
            href="javascript:void()"
            aria-expanded="false"
          >
            <i class="flaticon-381-folder-5" style="font-size: 24px"></i>
            <span class="nav-text">HÔTELS</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="/addhotel">AJOUTER</a></li>
            <li><a href="/addchambre">AJOUTER CHAMBRE</a></li>
            <li><a href="/showchambre">AFFICHER</a></li>
          </ul>
        </li>
        <li>
          <a href="/adduser" class="ai-icon" aria-expanded="false">
            <i class="flaticon-381-user-7"></i>
            <span class="nav-text">ADD USER</span>
          </a>
        </li>
        <li>
          <a
            class="has-arrow ai-icon"
            href="javascript:void()"
            aria-expanded="false"
          >
            <i class="flaticon-381-notepad"></i>
            <span class="nav-text">RESERVATIONS</span>
          </a>
          <ul aria-expanded="false">
            <li><a href="/reserve">ALL RESRVATIONS</a></li>
            <li><a href="/reserves-traite">PAYÉES</a></li>
            <li><a href="/reserves-cancel">ANNULÉES</a></li>
          </ul>
        </li>
        <li>
          <a href="login.php" class="ai-icon" aria-expanded="false">
            <i class="flaticon-381-switch-4"></i>
            <span class="nav-text">SE DECONNECTER</span>
          </a>
        </li>
      </ul>
      <div class="copyright">
        <p>
          ©
          
          All Rights Reserved
        </p>
        <p class="op5">Made with <i class="fa fa-heart"></i> By Nazoluka</p>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "SidebarLayout",
};
</script>

<style>
</style>