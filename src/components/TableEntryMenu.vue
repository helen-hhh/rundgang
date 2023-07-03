<script setup lang="ts">
const props = defineProps(['name'])
</script>

<template>
  <div class="tableEntryComponent">
    <p>{{ props.name }}</p>
    <div class="viewButton">View+</div>
  </div>
</template>

<style scoped>
.tableEntryComponent {
  display: flex;
  color: #1d3e0c;
  font-size: 1.75rem;
  line-height: 100%;
  font-family: Helvetica Neue;
  width: 100%;
  padding: 1.0625rem 1.75rem;
  align-items: center;
  gap: 24.9375rem;
  border-top: 2px solid #1d3e0c;
  border-bottom: 2px solid #1d3e0c;
  margin-top: -2px;
  position: relative;
}

.viewButton {
  border: #1d3e0c solid 2px;
  border-radius: 30px;
  padding: 0.6rem 2rem 0.6rem 2rem;
  position: absolute;
  right: 2.25rem;
}
</style>
