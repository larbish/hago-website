<template>
  <ULandingSection>
    <template #title>
      <ContentSlot name="title" />
    </template>

    <template #description>
      <ContentSlot
        name="description"
        unwrap="p"
      />
    </template>

    <template #headline>
      <slot name="headline" />
    </template>

    <UBlogList>
      <UBlogPost
        v-for="post in posts"
        :key="post._path"
        :to="post._path"
        :title="post.title"
        :description="post.description"
        :image="post.image"
        :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
        :authors="post.directors"
        :badge="post.badge"
        :ui="{
          description: 'line-clamp-2'
        }"
      />
    </UBlogList>
  </ULandingSection>
</template>

<script lang="ts" setup>
import type { Movie } from '~/types'

const props = defineProps({
  type: {
    type: String,
    default: 'scripted'
  }
})

const { data: posts } = await useAsyncData('posts', () => queryContent<Movie>(`/${props.type}`)
  .where({ _extension: 'md' })
  .limit(3)
  .sort({ date: -1 })
  .find())
</script>
