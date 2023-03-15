// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "../user/[id]";

async function getSession(sessionId: string) {
	const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/sessions/records/${sessionId}`, {
		cache: "no-cache"
	});
	const data = res.json();
	return data;
}

async function getAnswers(questionId: string) {
	const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/answers/records?filter=(question="${questionId}")`, {
		cache: "no-cache"
	});
	const data = await res.json();
	return data?.items as any;
}

async function getQuestions(sessionId: string) {
	const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/questions/records?filter=(session="${sessionId}")`, {
		cache: "no-cache"
	});
	const data = await res.json();
	return data?.items as any;
}

export async function getFullSession(sessionId: string) {
	const session = await getSession(sessionId);
	let questions = await getQuestions(sessionId);
	for (const question of questions) {
		let answers = await getAnswers(question.id);
		for (let answer of answers) {
			answer.user = await getUser(answer.user);
		}
		question.answers = answers;
	}
	return {...session, questions};
} 

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const { id } = req.query;
	const fullSession = await getFullSession(id as string);
	res.status(200).json(fullSession);
}
