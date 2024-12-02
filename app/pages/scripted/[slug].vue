<script setup lang="ts">
import { withoutTrailingSlash, joinURL } from 'ufo'
import type { Movie } from '~/types'

const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => queryContent<Movie>(route.path).findOne())
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/scripted')
  .where({ _extension: 'md' })
  .without(['body', 'excerpt'])
  .sort({ date: -1 })
  .findSurround(withoutTrailingSlash(route.path))
, { default: () => [] })

useSeoMeta({
  title: post.value.title,
  ogTitle: post.value.title,
  description: post.value.description,
  ogDescription: post.value.description
})

if (post.value.image?.src) {
  const site = useSiteConfig()

  useSeoMeta({
    ogImage: joinURL(site.url, post.value.image.src),
    twitterImage: joinURL(site.url, post.value.image.src)
  })
}
</script>

<template>
  <UContainer v-if="post">
    <UPageHeader
      :title="post.title"
      :description="post.description"
      :ui="{
        icon: {
          wrapper: 'w-full sm:w-auto flex justify-center'
        }
      }"
    >
      <template #icon>
        <NuxtImg
          v-if="post.image?.src"
          :src="post.image.src"
          :alt="post.image.alt"
          width="300"
        />
      </template>

      <template #headline>
        <UBadge
          v-bind="post.badge"
          variant="subtle"
        />
        <span class="text-gray-500 dark:text-gray-400">&middot;</span>
        <time class="text-gray-500 dark:text-gray-400">{{ new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }) }}</time>
      </template>

      <div class="flex flex-wrap items-center gap-3 mt-4">
        <UButton
          v-for="(author, index) in post.directors"
          :key="index"
          :to="author.to"
          color="white"
          target="_blank"
          size="sm"
        >
          <UAvatar
            v-bind="author.avatar"
            :alt="author.name"
            size="2xs"
          />

          {{ author.name }}
        </UButton>
      </div>
    </UPageHeader>

    <UPage>
      <UPageBody prose>
        <ContentRenderer
          v-if="post && post.body"
          :value="post"
        />

        <hr v-if="surround?.length">

        <UContentSurround :surround="surround" />
      </UPageBody>

      <template #right>
        <UContentToc
          v-if="post.body && post.body.toc"
          :links="post.body.toc.links"
        />
      </template>
    </UPage>
  </UContainer>
</template>
