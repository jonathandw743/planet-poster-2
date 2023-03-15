"use client";

import { useState } from "react";

import Link from "next/link";

export default function GenerateLink() {
	const [sessionId, setSessionId] = useState("");
	return (
		<fieldset>
			<legend>generate link</legend>
			session id
			<input
				type="text"
				name="sessionId"
				value={sessionId}
				onChange={(e) => {
					setSessionId(e.target.value);
				}}
			/>
			<br />
			<Link href={`/joinsession/${sessionId}`}>link</Link>
		</fieldset>
	);
}
