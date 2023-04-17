<template>
  <div class="home">
    <List></List>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import List from '@/components/list.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    List
  },
});
</script>
