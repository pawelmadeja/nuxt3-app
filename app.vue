<template>
  <div>Page visits: {{ data }}</div>
</template>

<script setup>
const { data } = await useAsyncData("count", () => $fetch("/api/count"));
</script>