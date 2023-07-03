<script setup lang="ts">
import { ref } from 'vue'
import EllipseElement from '../components/EllipseElement.vue'
import SmallEllipse from '../components/SmallEllipse.vue'
import TableEntryMenu from '../components/TableEntryMenu.vue'

import router from '@/router'
function route(name: string) {
  hide()
  router.push('/' + name)
}

let show = ref(false)

function hide() {
  show.value = !show.value
}
</script>

<template>
  <div v-if="show" class="menuBody">
    <EllipseElement @click="hide()"></EllipseElement>
    <div class="contentTable">
      <div class="tableHead">
        <div class="projectName">
          <SmallEllipse></SmallEllipse>
          Project Name
        </div>
      </div>
      <TableEntryMenu name="Smile" @click="route('smile')"></TableEntryMenu>
      <TableEntryMenu name="How is our soil doing?" @click="route('soil')"></TableEntryMenu>
      <TableEntryMenu name="Reise ans Ende des Bettes" @click="route('bed')"></TableEntryMenu>
      <TableEntryMenu name="Underwater" @click="route('underwater')"></TableEntryMenu>
    </div>
  </div>
  <div v-else>
    <EllipseElement class="margin" @click="hide()"></EllipseElement>
  </div>
</template>

<style scoped>
.menuBody {
  margin: 0%;
  width: 50vw;
  left: 0;
  height: 100vh;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  background-color: #fcfaf4;
  border-radius: 0px 30px 30px 0px;
}

.contentTable {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: -0.125rem;
  flex: 1 0 0;
  align-self: stretch;
}

.tableHead {
  display: flex;
  align-items: flex-start;
  gap: 25rem;
}

.projectName {
  color: #1d3e0c;
  font-size: 1.375rem;
  font-family: Helvetica Neue;
  font-weight: 700;
  display: flex;
  padding: 1.0625rem 0;
  align-items: center;
  gap: 0.75rem;
}

.margin {
  margin: 2.3rem;
}
</style>
