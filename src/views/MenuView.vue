<script setup lang="ts">
import ellipseElement from './assets/ellipseElement.vue';
import smallEllipse from './assets/smallEllipse.vue';
import tableEntryMenu from './tableEntryMenu.vue';
</script>

<template>
    <div class="menuBody">
        <ellipseElement></ellipseElement>
        <div class="contentTable">
            <div class="tableHead">
                <div class="projectName">
                    <smallEllipse></smallEllipse>
                    Project Name
                </div>
            </div>
            <tableEntryMenu></tableEntryMenu>
            <tableEntryMenu></tableEntryMenu>
            <tableEntryMenu></tableEntryMenu>
            <tableEntryMenu></tableEntryMenu>
            <tableEntryMenu></tableEntryMenu>
            <tableEntryMenu></tableEntryMenu>
        </div>
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
    background-color: #FCFAF4;
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
    color: #1D3E0C;
    font-size: 1.375rem;
    font-family: Helvetica Neue;
    font-weight: 700;
    display: flex;
    padding: 1.0625rem 0;
    align-items: center;
    gap: 0.75rem;
}
</style>