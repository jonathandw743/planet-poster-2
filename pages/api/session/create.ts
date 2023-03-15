// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

async function createSession(sessionName: string) {
	return await fetch(`${process.env.POCKETBASE_URL}/api/collections/sessions/records`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: sessionName,
		}),
	});
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const { name } = req.body;
	const createQuestionResponse = await createSession(name);
	const createdQuestion = await createQuestionResponse.json();
	res.status(200).json(createdQuestion);
}
