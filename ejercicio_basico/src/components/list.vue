<template>
 <div class="users-list">
    <ul>
        <li v-for="(member, index) in members" :key="member.id">
            <img :src="`${member.avatar_url}`" :alt="`${member.login}`">
            <h2>{{member.login}}</h2>
            <router-Link :to="`/detail/${member.login}`">
                Ver detalle
            </router-Link>
        </li>
    </ul>
 </div>
</template>

<script lang="ts"> 
import { defineComponent } from 'vue'
import { User } from '@/types';
import axios from 'axios';
export default defineComponent({
    name: "List",
    data () {
        return {
            members: [] as User[]
        }
    },
    async created() {
        await this.retrieveMember();
    },
    methods: {
        async retrieveMember() {
           axios 
            .get("https://api.github.com/orgs/lemoncode/members")
            .then((result) => {
                this.members = result.data;
                console.log(this.members);
                
            })
            .catch(error => {
                console.log(error);
            });
        }, 
    }
});
</script>

<style scoped>

ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    justify-items: center;
}
li {
    border: 1px solid #eaf73a;
    background-color: #1E1E1E;
    margin: 0.5em 0em;
    border-radius: 15px;
    width: 200px;
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

@media only screen and (max-width: 1300px) {
    ul {
        grid-template-columns: repeat(4, 1fr);
    }
}
@media only screen and (max-width: 1000px) {
    ul {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media only screen and (max-width: 750px) {
    ul {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media only screen and (max-width: 500px) {
    ul {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
