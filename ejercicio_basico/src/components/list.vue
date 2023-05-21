<template>
  <section>
    <div class="users-list">
     <h2>You are watching members that belong to <span>{{ info }}</span> </h2>
      <ul v-if="Array.isArray(members)">
        <li v-for="(member, index) in members" :key="member.id">
          <img :src="member.avatar_url" :alt="member.login" />
          <h3>{{ member.login }}</h3>
          <router-link :to="'/detail/' + member.login">
            ver detalle
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import axios from 'axios';
import { Member } from '@/types/index';
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    info: String,
  },
  setup(props) {
    const members = ref<Member[]>([]);

    async function fetchMembers() {
      try {
        const response = await axios.get<Member[]>(
          `https://api.github.com/orgs/${props.info}/members`
        );
        members.value = response.data;
      } catch (error) {
        console.log(error);
      }
    }

    watch(
      () => props.info,
      () => {
        fetchMembers();
      },
      { immediate: true }
    );

    return { members };
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  padding: 1rem;
}
li {
  border: 1px solid #eaf73a;
  background-color: #1E1E1E;
  border-radius: 15px;
  width: 15rem;
  overflow: hidden;
}
li:hover {
  box-shadow: 0px 0px 80px -29px rgba(234,247,58,1);
}
img {
  width: 100%;;
  border-radius: 15px 15px 0 0;
}
img:hover {
  transform: scale(1.1);
  transition: 350ms;
}
h2 {
  text-align: center;
}
h2 span {
  color: #eaf73a;
}
h3 {
  text-align: center;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
  color: #FCFAF9;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 0.7em;
  border-top: 1px solid #eaf73a;
}
a:hover {
  background-color: #eaf73a;
  color: #1E1E1E;
}
</style>