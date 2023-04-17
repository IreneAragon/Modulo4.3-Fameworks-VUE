<template>
 <div>Hola detail</div>
</template>

<script lang="ts">
import { User } from '@/types'
import { defineComponent } from 'vue'
import { userService  } from '@/services/user'
import type { RouteLocation } from 'vue-router'

export default defineComponent({
//   components: {
    
//   },
//   data: () => ({
//     user: {} as User,
//   }),
//   computed: {
//     id(): string {
//       return String((this.$route as RouteLocation).params.id)
//     },
//   },
//   created() {
//     userService.getUser(this.id).then((user: User | undefined) => {
//       if (user) {
//         this.user = user
//       }
//     })
//   },
})

</script>

<style></style>
