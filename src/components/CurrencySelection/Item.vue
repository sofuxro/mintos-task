<script setup lang="ts">
import type { Currency } from '@/types/Currency';

defineProps<{
  currency: Currency;
  isSelected: boolean;
}>();

defineEmits<{
  (e: 'toggleSelect', code: Currency): void;
}>();
</script>

<template>
  <button
    class="bg-[#ececec] dark:bg-neutral-600 hover:bg-[#dcdcdc] dark:hover:bg-neutral-700 transition-colors p-2 border border-gray-400 text-left text-sky-900 dark:text-sky-400 font-semibold cursor-pointer flex items-center gap-x-1 select-none"
    :class="{ 'bg-white dark:bg-neutral-800': isSelected }"
    @click="$emit('toggleSelect', currency)"
  >
    <span class="w-4 h-4 text-red-600 border border-gray-400 rounded-sm inline-block leading-[15px] text-center"><template v-if="isSelected">X</template></span>
    {{ currency.code }}
  </button>
</template>
