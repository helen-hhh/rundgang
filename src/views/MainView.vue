<script lang="ts" setup>

import ellipseElement from './assets/ellipseElement.vue'
import tableEntry from './tableEntry.vue';
import menuView from './menuView.vue'
import smallEllipse from './assets/smallEllipse.vue'
</script>

<template>
    <div class="body">
        <div class="titleRundgang">
            <ellipseElement></ellipseElement>
            <h1>Rundgang</h1>
        </div>
        <div class="tableOfContent">
            <div class="tableHead">
                <div class="projectName">
                    <smallEllipse></smallEllipse>
                    Project Name
                </div>
                <div class="projectType">
                    <smallEllipse></smallEllipse>
                    Type
                </div>
            </div>
            <tableEntry projectName="Smile" typeName="Creative Coding"></tableEntry>
            <tableEntry projectName="Hidden Stories Museum" typeName="UX/UI Design"></tableEntry>
            <tableEntry projectName="How is our soil doing?" typeName="Infographic"></tableEntry>
            <tableEntry projectName="Reise ans Ende des Bettes" typeName="Poetic Coding"></tableEntry>
            <tableEntry projectName="Underwater" typeName="Creative Coding"></tableEntry>√
        </div>

    </div>
</template>

<style scoped>
.body {
    margin: 0%;
    width: 100vw;
    height: 100vh;
    padding: 2.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    background-color: #FCFAF4;
}

.titleRundgang {
    display: flex;
    align-items: center;
    align-content: flex-start;
    gap: 2.25rem;
    flex-wrap: wrap;
}

.titleRundgang h1 {
    color: #1D3E0C;
    font-size: 5.5rem;
    font-family: Helvetica Neue;
    line-height: 100%;
}

.tableOfContent {
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

.projectType {
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