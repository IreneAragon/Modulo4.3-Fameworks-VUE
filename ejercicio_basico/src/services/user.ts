import type { User } from '@/types'

export const userService = {
  async get(): Promise<User[]> {
    const users = await fetch('/user.mock.json').then((response) =>
      response.json()
    )
    return users
  },
  async getUser(id: User['id']): Promise<User | undefined> {
    return this.get().then((users) =>
      users.find((user) => user.id === id)
    )
  },
}
