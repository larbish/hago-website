<template>
  <div
    class="grid items-center justify-between space-x-4"
    :class="`grid-cols-${cols}`"
  >
    <div>
      <slot name="one" />
    </div>
    <div v-if="Number(cols) > 1">
      <slot name="two" />
    </div>
    <div v-if="Number(cols) > 2">
      <slot name="three" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  cols: {
    type: Number,
    default: 2
  }
})
</script>
