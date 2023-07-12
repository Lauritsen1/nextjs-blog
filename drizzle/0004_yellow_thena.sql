ALTER TABLE `users` ADD PRIMARY KEY (`id`);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `id` text NOT NULL;