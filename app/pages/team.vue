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
        <NuxtImg
          v-for="production in productions"
          :key="production.src"
          :src="production.src"
          :alt="production.alt"
          width="50"
        />
      </ULandingLogos>
      <ULandingLogos
        class="mt-32"
        title="Broadcasters partners"
        align="center"
      >
        <NuxtImg
          v-for="broadcaster in broadcasters"
          :key="broadcaster.src"
          :src="broadcaster.src"
          :alt="broadcaster.alt"
          width="50"
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
  description: 'CEO & co-founder',
  avatar: {
    src: '/team/constantin.jpeg',
    alt: 'Constantin Briest'
  }
}, {
  name: 'Virginie Boireaux',
  description: 'MG & co-founder',
  avatar: {
    src: '/team/virginie.webp',
    alt: 'Virginie Boireaux'
  }
}, {
  name: 'Marie Besançon',
  description: 'Buisness Affairs',
  avatar: {
    src: '/team/marie.jpeg',
    alt: 'Marie Besançon'
  }
}, {
  name: 'Carla Alis',
  description: 'Administrative & Finance Assistant',
  avatar: {
    src: '/team/carla.jpeg',
    alt: 'Carla Alis'
  }
}, {
  name: 'Nina Phillips',
  description: 'Marketing & Communication',
  avatar: {
    src: '/team/nina.jpeg',
    alt: 'Nina Phillips'
  }
}]

const broadcasters = [
  {
    src: '/broadcasters/aragontv.png',
    alt: 'Aragon TV logo'
  },
  {
    src: '/broadcasters/betv.jpg',
    alt: 'Be TV logo'
  },
  {
    src: '/broadcasters/etbsat.png',
    alt: 'ETB Sat logo'
  },
  {
    src: '/broadcasters/proximus.png',
    alt: 'Proximus logo'
  },
  {
    src: '/broadcasters/radiocanada.jpg',
    alt: 'Radio Canada logo'
  },
  {
    src: '/broadcasters/rtlcrime.png',
    alt: 'RTL Crime logo'
  },
  {
    src: '/broadcasters/rts.jpg',
    alt: 'RTS logo'
  },
  {
    src: '/broadcasters/telequebec.jpg',
    alt: 'Télé Québeclogo'
  },
  {
    src: '/broadcasters/tf1.jpg',
    alt: 'TF1 logo'
  },
  {
    src: '/broadcasters/rtlpassion.png',
    alt: 'RTL Passion logo'
  },
  {
    src: '/broadcasters/rtlvi.png',
    alt: 'RTL vi logo'
  },
  {
    src: '/broadcasters/tv5.jpg',
    alt: 'TV5 logo'
  },
  {
    src: '/broadcasters/walterpresent.png',
    alt: 'Walter Present logo'
  },
  {
    src: '/broadcasters/ylen.png',
    alt: 'YLEN logo'
  }
]

const productions = [
  {
    src: '/productions/amedia.png',
    alt: 'Amedia logo'
  },
  {
    src: '/productions/beaubourgstories.png',
    alt: 'Beaubourg Stories logo'
  },
  {
    src: '/productions/bigbandstory.jpg',
    alt: 'Big Band Story logo'
  },
  {
    src: '/productions/cropped.png',
    alt: 'cropped logo'
  },
  {
    src: '/productions/elephant.png',
    alt: 'elephant logo'
  },
  {
    src: '/productions/empreinte-digitale.png',
    alt: 'empreinte digitale logo'
  },
  {
    src: '/productions/encompagniedeslamas.png',
    alt: 'en compagnie des lamas logo'
  },
  {
    src: '/productions/n22.png',
    alt: 'n22'
  },
  {
    src: '/productions/opengraph.jpg',
    alt: 'opengraph logo'
  },
  {
    src: '/productions/storyplus.png',
    alt: 'story plus logo'
  },
  {
    src: '/productions/unefille.png',
    alt: 'une fille logo'
  },
  {
    src: '/productions/vigofilm.png',
    alt: 'vigo film logo'
  }
]
</script>
