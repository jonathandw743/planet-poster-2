// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export async function getSessions() {
	const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/sessions/records`, {
		cache: "no-store",
	});
	const data = await res.json();
	return data?.items as any;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const sessions = await getSessions();
	res.status(200).json(sessions);
}
