<template>
    <div class="demo flex px-1 ">
        <div class="demo-button flex flex-col gap-2">
            <span>Demo Button</span>
            <div class="flex flex-col gap-2">
                <div class="flex flex-row gap-2 items-center">
                    <span>Primary</span>
                    <BaseV1Button :text="'Primary Button'" :type="'primary'"></BaseV1Button>
                </div>
                <div class="flex flex-row gap-2 items-center">
                    <span>Normal</span>
                    <BaseV1Button :text="'Normal Button'" ></BaseV1Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>