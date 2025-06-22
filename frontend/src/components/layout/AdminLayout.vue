<script setup lang="ts">
import { RouterView } from "vue-router";
import AdminNavbar from "../admin/AdminNavbar.vue";
import SidebarProvider from "../ui/sidebar/SidebarProvider.vue";
import AdminSidebar from "../admin/AdminSidebar.vue";
</script>

<template>
  <SidebarProvider>
    <AdminSidebar />
    <div class="flex flex-col w-full h-screen">
      <AdminNavbar />
      <RouterView />
    </div>
  </SidebarProvider>
</template>
