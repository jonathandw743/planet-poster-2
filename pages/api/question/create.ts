// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

async function createQuestion(sessionId: string, question: string, options: string[]) {
	return await fetch(`${process.env.POCKETBASE_URL}/api/collections/questions/records`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			session: sessionId,
			question,
			options,
		}),
	});
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const {sessionId, question, options} = req.body;
    const createQuestionResponse = await createQuestion(sessionId, question, options);
	const createdQuestion = await createQuestionResponse.json();
	res.status(200).json(createdQuestion);
}
