<script setup lang="ts">
import { ref } from 'vue';

import CurrencyItem from './Item.vue';
import CurrencySelectedItem from './SelectedItem.vue';
import type { Currency } from '@/types/Currency';

/* ====================== Props ====================== */

const { currencies } = defineProps<{
  currencies: Currency[];
}>();

/* ====================== Vars ====================== */

const selectedCurrencies = ref<Currency[]>([]);

/* ====================== Functions ====================== */

const toggleSelect = (currency: Currency) => {
  const index = selectedCurrencies.value.indexOf(currency);
  if (index > -1) {
    selectedCurrencies.value.splice(index, 1);
  } else {
    selectedCurrencies.value.push(currency);
  }
};

const remove = (currency: Currency) => {
  const index = selectedCurrencies.value.indexOf(currency);
  if (index > -1) {
    selectedCurrencies.value.splice(index, 1);
  }
};
</script>

<template>
  <div class="max-w-[600px] border border-gray-400 rounded-md p-8 pr-6 shadow-lg">

    <!------------------ Selected currencies ------------------->
    <div class="mts-currency-wrapper mb-10" data-testid="selected-currencies">
      <CurrencySelectedItem
        v-for="currency in selectedCurrencies"
        :key="currency.code"
        class="mts-currency-item"
        :currency="currency"
        @remove="remove"
      />
    </div>

    <!------------------ Available currencies ------------------->
    <div class="mts-currency-wrapper" data-testid="available-currencies">
      <CurrencyItem
        v-for="currency in currencies"
        :key="currency.code"
        class="mts-currency-item"
        :currency="currency"
        :isSelected="selectedCurrencies.includes(currency)"
        @toggleSelect="toggleSelect"
      />
    </div>
  </div>
</template>

<style scoped>
.mts-currency-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
}

.mts-currency-item {
  flex-basis: 100%;

  @media (min-width: 680px) {
    flex-basis: calc(33.333% - 8px);
  }
}
</style>