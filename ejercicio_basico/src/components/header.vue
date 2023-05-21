<template>
  <div class="searcher">
    <p>Search one Github organization</p>
    <input type="text" v-model="info" />
    <button @click="sendInfo">Search</button>
  </div>
</template>

<script lang="ts">
import { ref, SetupContext } from 'vue';

export default {
  setup(props: any, context: SetupContext) {
    const info = ref('lemoncode');

    function sendInfo() {
      if (info.value.trim() !== '') {
        context.emit('send-info', info.value.trim());
      }
    }

    return { info, sendInfo };
  },
};
</script>

<style scoped>
.searcher {
  border-bottom: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2em;
}
.searcher p {
  margin: 10px;
}
.searcher input {
  outline: none;
  background: none;
  color: inherit;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
}
.searcher button {
  outline: none;
  padding: 10px;
  color: inherit;
  cursor: pointer;
  margin-left: 10px;
  background-color: transparent;
  border: 1px solid #eaf73a;
  border-radius: 10px;
}
.searcher button:hover {
  background-color: #eaf73a;
  color: #1E1E1E;
}
</style>