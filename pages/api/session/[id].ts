// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

async function getSession(sessionId: string) {
	const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/sessions/records/${sessionId}`);
	const data = res.json();
	return data;
}

async function getQuestions(sessionId: string) {
	const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/questions/records?filter=(session="${sessionId}")`);
	const data = await res.json();
	return data?.items as any;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const { id } = req.query;
	const session = await getSession(id as string);
	const questions = await getQuestions(id as string);
	res.status(200).json({ ...session, questions });
}
