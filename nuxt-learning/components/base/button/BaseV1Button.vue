<template>
    <div class="base-btn px-1" :class="[props.type]">
        
    </div>

</template>

<script setup lang="ts">

import {ref} from 'vue';

const props = defineProps({
    type: {
        default: 'normal',
        type: String
    }
})


</script>

<style lang="scss">
@import './BaseV1Button.scss';
</style>