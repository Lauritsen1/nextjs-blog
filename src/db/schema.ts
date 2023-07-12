import { mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core'

export const users = mysqlTable('users', {
  id: varchar('id', { length: 255 }).primaryKey(),
  username: text('username'),
  imageUrl: text('image_url'),
})

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title'),
  content: text('content'),
})
