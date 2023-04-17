<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/header.vue';
import List from './components/list.vue'
import Detail from './components/detail.vue'

export default defineComponent({
  components: {
    Header,
    List,
    Detail,
  },
});
</script>




<template>
  <Header></Header>

  <RouterView />
</template>
