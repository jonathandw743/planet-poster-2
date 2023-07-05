"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

export default function GenerateLink() {
	const [sessionId, setSessionId] = useState("");
	const [joinSessionHref, setJoinSessionHref] = useState("");

	useEffect(() => {
		setJoinSessionHref(`/joinsession/${sessionId}`);
	}, [sessionId]);
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
			{sessionId === "" || <Link href={joinSessionHref}>{joinSessionHref}</Link>}

		</fieldset>
	);
}
