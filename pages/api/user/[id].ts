// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export async function getUser(userId: string) {
	const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/users/records/${userId}`, {
		cache: "no-cache"
	});
	const data = res.json();
	return data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const { id } = req.query;
	const user = await getUser(id as string);
	res.status(200).json(user);
}