import { mysqlTable, serial, text, varchar, json } from 'drizzle-orm/mysql-core'
import { type InferModel } from 'drizzle-orm'

export const users = mysqlTable('users', {
  id: varchar('id', { length: 255 }).primaryKey(),
  username: text('username'),
  imageUrl: text('image_url'),
})

export type User = InferModel<typeof users>

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title'),
  content: json('content'),
})

export type Post = InferModel<typeof posts>
