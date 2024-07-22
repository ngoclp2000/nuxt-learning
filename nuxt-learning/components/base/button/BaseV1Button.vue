<template>
    <div class="base-btn px-1" :class="[props.type, props.round ? 'round' : '']">
        <button class="main-btn">
            <div class="btn-text">
                {{ props.text }}
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';

const props = defineProps({
    type: {
        default: 'normal',
        type: String
    },
    text: {
        default: null,
        type: String
    },
    round:{
        default: false,
        type: Boolean
    }
})


</script>

<style lang="scss">
@import './BaseV1Button.scss';
</style>