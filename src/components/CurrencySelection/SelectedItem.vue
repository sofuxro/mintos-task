<script setup lang="ts">
import type { Currency } from '@/types/Currency';

defineProps<{
  currency: Currency;
}>();

defineEmits<{
  (e: 'remove', code: Currency): void;
}>();
</script>

<template>
  <div class="relative bg-[#ececec] p-2 text-center select-none">
    <span class=" font-semibold">{{ currency.code }}</span>
    <button class="w-5 h-5 bg-neutral-600 text-white border-white hover:bg-white hover:text-neutral-600 absolute -top-2 -right-2 border-2 hover:border-neutral-600 rounded-full font-medium text-xs leading-[8px] cursor-pointer transition-all" @click="$emit('remove', currency)">X</button>
  </div>
</template>
