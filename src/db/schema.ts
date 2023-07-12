import { mysqlTable, serial, text } from 'drizzle-orm/mysql-core'

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title'),
  content: text('content'),
})
