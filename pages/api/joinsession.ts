// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

async function joinSession(sessionId: string, nickname: string) {
	return await fetch(`${process.env.POCKETBASE_URL}/api/collections/users/records`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			session: sessionId,
			nickname,
		}),
	});
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const {sessionId, nickname} = req.body;
    const joinSessionResponse = await joinSession(sessionId, nickname);
	const user = await joinSessionResponse.json();
	res.status(200).json(user);
}
