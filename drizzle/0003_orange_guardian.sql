ALTER TABLE `posts` MODIFY COLUMN `id` serial AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `users` DROP PRIMARY KEY--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `id` text;