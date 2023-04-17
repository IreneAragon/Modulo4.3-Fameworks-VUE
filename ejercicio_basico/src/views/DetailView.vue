<template>
    <div class="detail">
        <Detail></Detail>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Detail from '@/components/detail.vue';
  
  
  export default defineComponent({
    name: 'DetailView',
    components: {
        Detail
    },
  });
  </script>
  