<template>
<div class="square-wrapper">
  <div class="grid">
    <div
      v-for="(_, index) in grid"
      :key="index"
      :class="['cell', { blinking: blinkingList.includes(index) ? 'blinking' : '' }]"
    >
      <div
        v-if="ballList.includes(index)"
        class="ball"
      />
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
const grid = Array(9);
const blinkingList = [2, 4, 8];
const ballList = [0, 2, 6, 8];
</script>

<style>
@import "./index.scss";
</style>
