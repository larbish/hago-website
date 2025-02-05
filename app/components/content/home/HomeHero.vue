<template>
  <ULandingHero>
    <template #headline>
      <NuxtLink>
        <UBadge
          size="lg"
          variant="outline"
          class="rounded-full py-1 px-3 badge"
        >
          <slot name="headline" />
        </UBadge>
      </NuxtLink>
    </template>

    <template #title>
      <div>
        <ContentSlot name="title" />
      </div>
    </template>

    <template #description>
      <ContentSlot
        name="description"
        unwrap="p"
      />
    </template>

    <template #links>
      <slot name="links" />
    </template>
  </ULandingHero>
</template>

<style lang="postcss" scoped>
.dark .badge {
  animation: neon 6s ease-in-out infinite;
  box-shadow: 0 0 1px rgba(0, 118, 70, 0),
              0 0 15px rgba(56, 189, 248, 0.15),
              0 0 1px rgba(56, 189, 248,0.25),
              0 0 6px rgba(56, 189, 248,0.50),
              0 0 12px rgba(56, 189, 248,0.40),
              0 0 22px rgba(56, 189, 248,0.25);

  text-shadow: 0 0 1px rgba(0, 118, 70, 0),
  0 0 15px rgba(56, 189, 248, 0.15),
  0 0 1px rgba(56, 189, 248,0.25),
  0 0 6px rgba(56, 189, 248,0.50),
  0 0 12px rgba(56, 189, 248,0.40),
  0 0 22px rgba(56, 189, 248,0.25);
}

@keyframes neon {
  38%, 40%, 44%, 46%, 57%, 58.5% {
    box-shadow: 0 0 1px rgba(0, 118, 70, 0),
              0 0 15px rgba(56, 189, 248, 0.15),
              0 0 1px rgba(56, 189, 248,0.25),
              0 0 6px rgba(56, 189, 248,0.50),
              0 0 12px rgba(56, 189, 248,0.40),
              0 0 22px rgba(56, 189, 248,0.25);

    text-shadow: 0 0 1px rgba(0, 118, 70, 0),
              0 0 15px rgba(56, 189, 248, 0.15),
              0 0 1px rgba(56, 189, 248,0.25),
              0 0 6px rgba(56, 189, 248,0.50),
              0 0 12px rgba(56, 189, 248,0.40),
              0 0 22px rgba(56, 189, 248,0.25);
  }
  39%, 43%, 45%, 58% {
    box-shadow: none;
    text-shadow: none;
  }
}
</style>
