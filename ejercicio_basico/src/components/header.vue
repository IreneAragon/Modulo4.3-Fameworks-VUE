<template>
    <h1>Search company: </h1>
    <form>
      <label for="filter"></label>
      <input type="text" id="filter" name="filter" />
      <button type="button">Search</button>
    </form>
</template>
   
  <script lang="ts">
  import { defineComponent } from "vue";
   
  export default defineComponent({});
  </script>
   
  <style scoped>
  h1 {
    color: lightgoldenrodyellow;
  }
  </style>
  