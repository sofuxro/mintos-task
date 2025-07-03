<script setup lang="ts">
import { ref } from 'vue';

import CurrencyItem from './Item.vue';
import CurrencySelectedItem from './SelectedItem.vue';
import { Currency } from '@/types/Currency';

const currencies = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CNY', name: 'Chinese Yuan' }
];

const selectedCurrencies = ref<Currency[]>([]);

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
    <div class="mts-currency-wrapper mb-10">
      <CurrencySelectedItem
        v-for="currency in selectedCurrencies"
        :key="currency.code"
        class="mts-currency-item"
        :currency="currency"
        @remove="remove"
      />
    </div>

    <div class="mts-currency-wrapper">
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