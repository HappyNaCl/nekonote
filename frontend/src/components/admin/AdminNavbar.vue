<script setup lang="ts">
import { Bell, Menu } from "lucide-vue-next";
import { useSidebar } from "../ui/sidebar";

const { toggleSidebar } = useSidebar();
</script>

<template>
  <nav
    class="flex flex-row items-center px-8 py-4 border border-b-secondary-foreground gap-8"
  >
    <button
      class="cursor-pointer"
      @click="
        {
          toggleSidebar();
        }
      "
    >
      <Menu />
    </button>

    <span class="pl-4 ml-2 border-l border-secondary-foreground">
      Admin Dashboard
    </span>
    <div class="ml-auto">
      <button><Bell :size="18" /></button>
    </div>
  </nav>
</template>
