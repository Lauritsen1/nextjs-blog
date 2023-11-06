import {
  mysqlTable,
  serial,
  text,
  varchar,
  json,
  timestamp,
  boolean,
} from 'drizzle-orm/mysql-core'
import { type InferModel, relations } from 'drizzle-orm'

export const users = mysqlTable('users', {
  id: varchar('id', { length: 255 }).primaryKey(),
  username: text('username'),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow(),
})

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}))

export type User = InferModel<typeof users>

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title'),
  content: json('content'),
  authorId: varchar('author_id', { length: 255 }),
  published: boolean('published').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}))

export type Post = InferModel<typeof posts>
