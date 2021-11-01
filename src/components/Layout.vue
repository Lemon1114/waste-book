<template>
  <div class="layout">
    <div class="content">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: "layout",
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>
