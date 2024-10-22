<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: (title) => {
    if (!title) {
      return 'HAVE A GOOD ONE'
    }

    return title.includes('HAVE A GOOD ONE') ? title : `${title} · HAVE A GOOD ONE`
  },
  viewport: 'width=device-width, initial-scale=1',
  ogSiteName: 'HAVE A GOOD ONE',
  ogType: 'website',
  ogImage: `https://larbish-hago-website.nuxt.space/social-card .webp`,
  ogImageAlt: 'HAVE A GOOD ONE',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>
