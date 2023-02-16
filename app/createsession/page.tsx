"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateSession() {
	const [name, setName] = useState("");

	const [sessionId, setSessionId] = useState();

	const router = useRouter();

	async function createSession(e:any) {
		e.preventDefault();

		const res = await fetch(`http://127.0.0.1:8090/api/collections/sessions/records`, {
            method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name
			}),
        });

		const data = await res.json();
		
		setName("");
		setSessionId(data?.id);

		router.refresh();
	}

	return (
		<>
			<h1>create session</h1>
			<form onSubmit={createSession}>
				<label htmlFor="name">
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
			<p>session id: {sessionId ?? "not yet created"}</p>
			<p>share this id to allow people to join the session</p>
			<Link href={`/session/${sessionId}`} >link to join session</Link>
		</>
	);
}
