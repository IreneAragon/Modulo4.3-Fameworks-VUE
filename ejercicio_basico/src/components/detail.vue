<template>
    <div class="user-wapper">
        <h2>This member belongs to {{member.company}}</h2>
        <div class="card">
            <img :src="`${member.avatar_url}`" :alt="`${member.login}`">
            <div class="user-info">
                <h3>User:</h3>
                <p>{{member.login}}</p>
            </div>
            <div v-if="member.email" class="user-info">
                <h3>Email:</h3>
                <p>{{member.email}}</p>
            </div>
            <div v-else class="user-info">
                <h3>Email:</h3>
                <p class="unknown">Unknown</p>
            </div>
            <div v-if="member.bio" class="user-info">
                <h3>Bio:</h3>
                <p>{{member.bio}}</p>
            </div>
            <div v-else class="user-info">
                <h3>Bio:</h3>
                <p class="unknown">Unknown</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Member } from '@/types';
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Detail",
    data () {
        return {
            member:[] as unknown as Member
        }
    },
    async created() {
        let uri: string[] = window.location.href.split('/');
        const memberLogin: string = uri[4]
        await this.retrieveMember(memberLogin);
    },
    methods: {
        async retrieveMember(memberLogin: string) {
           axios 
            .get(`https://api.github.com/users/${memberLogin}`)
            .then((result) => {
                this.member = result.data;
            })
            .catch(error => {
                console.log(error);
            });
        }, 
    }
  
})
</script>

<style>
.user-wapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card {
    border: 1px solid #eaf73a;
    background-color: #1E1E1E;
    margin: 0.5em 0em;
    border-radius: 15px;
    width: 200px;
    overflow: hidden;
    padding-bottom: 1em;
}
.card:hover {
    box-shadow: 0px 0px 80px -29px rgba(234,247,58,1);
}
img {
    width: 100%;
    border-radius: 15px 15px 0 0;
}
img:hover {
    transform: scale(1.1);
    transition: 350ms;
}
.user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.unknown {
    color: lightslategray;
}
p {
    text-align: center;
    margin: 0;
}
h3 {
    margin-bottom: 0.3em;
}
</style>
