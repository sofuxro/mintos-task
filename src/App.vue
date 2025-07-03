<script setup lang="ts">
import CurrencySelection from './components/CurrencySelection/index.vue'
</script>

<template>
  <div>
    <!-- Using mock data - in production this should be taken from an api -->
    <CurrencySelection :currencies="[
        { code: 'USD', name: 'US Dollar' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'British Pound' },
        { code: 'JPY', name: 'Japanese Yen' },
        { code: 'AUD', name: 'Australian Dollar' },
        { code: 'CAD', name: 'Canadian Dollar' },
        { code: 'CHF', name: 'Swiss Franc' },
        { code: 'CNY', name: 'Chinese Yuan' }
      ]"
    />
  </div>
</template>

<style scoped>
</style>
