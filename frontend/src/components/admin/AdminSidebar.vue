<script setup lang="ts">
import Sidebar from "../ui/sidebar/Sidebar.vue";
import SidebarContent from "../ui/sidebar/SidebarContent.vue";
import SidebarHeader from "../ui/sidebar/SidebarHeader.vue";
import SongsMenu from "./menus/SongsMenu.vue";
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <h1>Nekonote</h1>
    </SidebarHeader>
    <SidebarContent>
      <SongsMenu />
    </SidebarContent>
  </Sidebar>
</template>
