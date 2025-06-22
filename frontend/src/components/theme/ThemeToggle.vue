<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-vue-next";

const mode = useColorMode();
</script>

<template>
  <Button
    variant="outline"
    @click="mode = mode === 'light' ? 'dark' : 'light'"
    class="w-8 h-8 p-0 absolute bottom-4 left-4 border border-secondary-foreground cursor-pointer z-[100]"
  >
    <Sun v-if="mode !== 'light'" class="h-4 w-4" />
    <Moon v-else class="h-4 w-4" />
  </Button>
</template>
