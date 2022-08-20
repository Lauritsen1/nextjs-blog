import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {

	if (req.method === 'POST') {
		try {
			const post = await prisma.post.create({
				data: {
					title: req.body.title,
					content: req.body.content,
					author: req.body.author,
				}
			});
			return res.status(200).json(post, { success: true });
		} catch (error) {
			console.error(error);
			return res.status(500).json(error, { success: false })
		}
	}

	if (req.method === 'GET') {
		try {
			const posts = await prisma.post.findMany();
			return res.status(200).json(posts, { success: true });
		} catch (error) {
			console.error(error);
			return res.status(500).json(error, { success: false })
		}
	}

	return res.status(405).json({ message: 'Method not allowed', success: false });
}