<script setup lang="ts">
import { Drum, Mails, Music } from "lucide-vue-next";

const songRoutes = [
  {
    name: "Song Management",
    to: "/admin/songs",
    icon: Music,
  },
  {
    name: "Song Requests",
    to: "/admin/requests",
    icon: Mails,
  },
  {
    name: "Artists",
    to: "/admin/artists",
    icon: Drum,
  },
];
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Songs & Artists</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="route in songRoutes" :key="route.name">
          <SidebarMenuButton :as-child="true">
            <RouterLink :to="route.to" class="flex items-center gap-3">
              <component :is="route.icon" class="mr-2" />
              {{ route.name }}
            </RouterLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
