<template>
  <div>{{ slug }}</div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug
</script>
