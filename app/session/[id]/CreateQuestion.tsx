"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateQuestion({sessionId}: any) {
    const [question, setQuestion] = useState("");

    const router = useRouter();

    async function createQuestion(e: any) {
        e.preventDefault();
        const res = await fetch(`${window.location.origin}/api/question/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sessionId,
                question,
            }),
        });
        const data = await res.json();
        console.log(data);
        setQuestion("");
        router.refresh();
    }

    return <>
        create question
        <form onSubmit={createQuestion}>
            <label htmlFor="question">
                question
                <input type="text" name="question" value={question} onChange={(e) => {
                    setQuestion(e.target.value);
                }} />
            </label>
            <button>create question</button>
        </form>
    </>;
}