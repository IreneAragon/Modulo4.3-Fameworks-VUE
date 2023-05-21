<template>
  <div>
    <Header @send-info="handleSendInfo" />
    <RouterView :info="organization" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from './components/header.vue';
import List from './components/list.vue';

export default defineComponent({
  components: {
    Header,
    List,
  },
  setup() {
    const organization = ref('lemoncode');

    function handleSendInfo(info: string) {
      organization.value = info;
    }

    return { organization, handleSendInfo };
  },
});
</script>