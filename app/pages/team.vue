<template>
  <UContainer>
    <UPageHeader
      :title="page.title"
      :description="page.description"
      class="py-[50px]"
    />
    <UPageBody>
      <UBlogList :ui="{ wrapper: 'grid grid-cols-2 lg:grid-cols-5' }">
        <UBlogPost
          v-for="member in members"
          :key="member.name"
          :title="member.name"
          :description="member.description"
          :image="member.avatar"
          :ui="{ image: { wrapper: 'aspect-[2/3]' } }"
        />
      </UBlogList>
      <ULandingLogos
        class="mt-32"
        title="Production partners"
        align="center"
      >
        <UIcon
          name="i-simple-icons-github"
          class="w-10 h-10 flex-shrink-0"
        />
        <UIcon
          name="i-simple-icons-discord"
          class="w-10 h-10 flex-shrink-0"
        />
        <UIcon
          name="i-simple-icons-x"
          class="w-10 h-10 flex-shrink-0"
        />
        <UIcon
          name="i-simple-icons-instagram"
          class="w-10 h-10 flex-shrink-0"
        />
        <UIcon
          name="i-simple-icons-linkedin"
          class="w-10 h-10 flex-shrink-0"
        />
        <UIcon
          name="i-simple-icons-facebook"
          class="w-10 h-10 flex-shrink-0"
        />
      </ULandingLogos>
      <ULandingLogos
        class="mt-32"
        title="Broadcaster partners"
        align="center"
      >
        <UIcon
          name="i-simple-icons-github"
          class="w-10 h-10 flex-shrink-0"
        />
        <UIcon
          name="i-simple-icons-discord"
          class="w-10 h-10 flex-shrink-0"
        />
        <UIcon
          name="i-simple-icons-x"
          class="w-10 h-10 flex-shrink-0"
        />
        <UIcon
          name="i-simple-icons-instagram"
          class="w-10 h-10 flex-shrink-0"
        />
        <UIcon
          name="i-simple-icons-linkedin"
          class="w-10 h-10 flex-shrink-0"
        />
        <UIcon
          name="i-simple-icons-facebook"
          class="w-10 h-10 flex-shrink-0"
        />
      </ULandingLogos>
    </UPageBody>
  </UContainer>
</template>

<script lang="ts" setup>
const { data: page } = await useAsyncData('team', () => queryContent('/team').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const members = [{
  name: 'Constantin Briest',
  description: 'CEO',
  avatar: {
    src: '/team/constantin.webp'
  }
}, {
  name: 'Virginie Boireaux',
  description: 'DG',
  avatar: {
    src: '/team/virginie.webp'
  }
}, {
  name: 'Marie Besançon',
  description: 'Buisness Affairs',
  avatar: {
    src: 'https://placehold.co/300x400?text=TODO'
  }
}, {
  name: 'Carla Alis',
  description: 'Assistante à la distribution',
  avatar: {
    src: 'https://placehold.co/300x400?text=TODO'
  }
}, {
  name: 'Nina Phillips',
  description: 'Marketing',
  avatar: {
    src: 'https://placehold.co/300x400?text=TODO'
  }
}]
</script>
