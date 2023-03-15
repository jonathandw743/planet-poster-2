// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "../user/[id]";

async function createAnswer(userId: string, questionId: string, answer: string) {
	return await fetch(`${process.env.POCKETBASE_URL}/api/collections/answers/records`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			user: userId,
			question: questionId,
			answer,
		}),
	});
}

async function getAnswerWithUserAndQuestion(userId: string, questionId: string) {
	console.log({userId});
	const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/answers/records?filter=(question='${questionId}')`, {
		cache: "no-cache",
	});
	const data = await res.json();
	console.log({data});
	try {
		let answers = data?.items;
		answers = answers.filter((answer: any) => answer.user === userId);
		const answer = answers[0];
		return answer;
	} catch (err) {
		console.error(err);
		return undefined;
	}
}

async function updateAnswer(answerId: string, answer: string) {
	return await fetch(`${process.env.POCKETBASE_URL}/api/collections/answers/records/${answerId}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			answer,
		}),
	});
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const { userId, questionId, answer } = req.body;
	const existingAnswer = await getAnswerWithUserAndQuestion(userId, questionId);
	console.log({existingAnswer});
	if (typeof existingAnswer === "undefined") {
		const createAnswerResponse = await createAnswer(userId, questionId, answer);
		const createdAnswer = await createAnswerResponse.json();
		res.status(200).json(createdAnswer);
		return;
	} else {
		console.log("updating answer");
		const createAnswerResponse = await updateAnswer(existingAnswer.id, answer);
		const createdAnswer = await createAnswerResponse.json();
		console.log(createdAnswer);
		res.status(200).json(createdAnswer);
		return;
	}
}
