ALTER TABLE `posts` ADD `author_id` varchar(255);--> statement-breakpoint
ALTER TABLE `posts` ADD `created_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `posts` ADD `updated_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `users` ADD `created_at` timestamp DEFAULT (now());