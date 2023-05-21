import type { Member } from '@/types'

export const userService = {
  async get(): Promise<Member[]> {
    const users = await fetch('/user.mock.json').then((response) =>
      response.json()
    )
    return users
  },
  async getUser(id: Member['id']): Promise<Member | undefined> {
    return this.get().then((users) =>
      users.find((user) => user.id === id)
    )
  },
}
