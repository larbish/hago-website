<script setup lang="ts">
useHead({
  script: [{ src: 'https://player.vimeo.com/api/player.js', defer: true }]
})

const { data: page } = await useAsyncData('home', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>

<style scoped>
</style>
