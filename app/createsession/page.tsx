"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRouter as nr } from "next/router";
import { useEffect, useState } from "react";

export default function CreateSession() {
	const [name, setName] = useState("");

	const [sessionId, setSessionId] = useState();

	const [joinSessionHref, setJoinSessionHref] = useState("");

	useEffect(() => {
		setJoinSessionHref(`/joinsession/${sessionId}`);
	}, [sessionId]);

	const router = useRouter();

	async function createSession(e: any) {
		e.preventDefault();

		const res = await fetch("/api/session/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name
			}),
		});

		const data = await res.json();

		console.log(data);

		setName("");
		setSessionId(data?.id);

		router.refresh();
	}

	return (
		<>
			<h1>create session</h1>
			<form onSubmit={createSession}>
				<label>
					optional name for session
					<input
						type="text"
						name="name"
						onChange={(e) => {
							setName(e.target.value);
						}}
						value={name}
					/>
				</label>
				<button>create session</button>
			</form>
			{sessionId === undefined || <>
				<p>session id: {sessionId}</p>
				<p>share this id to allow people to join the session</p>
				<Link href={joinSessionHref} >{joinSessionHref}</Link>
				<button onClick={() => {
					navigator.clipboard.writeText(window.location.host + joinSessionHref)
				}}>copy link</button></>
			}
		</>
	);
}
