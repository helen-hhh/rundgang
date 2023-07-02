<script setup lang="ts"></script>

<template>
    <div class="tableEntryComponent">
        <p>Hidden Stories Museum</p>
        <div class="viewButton"> View+</div>
    </div>
</template>

<style scoped>
.tableEntryComponent {
    display: flex;
    color: #1D3E0C;
    font-size: 1.75rem;
    line-height: 100%;
    font-family: Helvetica Neue;
    width: 100%;
    padding: 1.0625rem 1.75rem;
    align-items: center;
    gap: 24.9375rem;
    border-top: 2px solid #1D3E0C;
    border-bottom: 2px solid #1D3E0C;
    margin-top: -2px;
}

.viewButton {
    border: #1D3E0C solid 2px;
    border-radius: 30px;
    padding: 0.6rem 2rem 0.6rem 2rem;
    position: absolute;
    right: 2.25rem;
}
</style>