"use client";

import Link from "next/link";
import { useState } from "react";

export default function JoinSessionForm({sessionId}: any) {

    const [nickname, setNickname] = useState("");
    const [userId, setUserId] = useState("");

    async function joinSession(e:any) {
        e.preventDefault();

        const userRes = await fetch(`/api/joinsession`, {
            method: "POST",
            headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
                sessionId,
				nickname,
			}),
        });

        const user = await userRes.json();

        console.log(user);

        setUserId(user.id);

        setNickname("");
    }
    return <fieldset>
        <legend>join session form</legend>
        <p>session id: {sessionId}</p>
        <form onSubmit={joinSession}>
        <label>
            nickname
            <input type="text" value={nickname} onChange={(e) => {
                setNickname(e.target.value);
            }} />
        </label>
        <button>generate link</button>
        </form>
        <Link href={`/session/${userId}`}>link</Link>
    </fieldset>;
}