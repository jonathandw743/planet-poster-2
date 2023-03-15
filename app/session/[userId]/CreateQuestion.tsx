"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateQuestion({ sessionId }: any) {
	const [question, setQuestion] = useState("");
    const [optionsString, setOptionsString] = useState("");

	const router = useRouter();

    function optionsArrayFromString(optionsString: string) {
        const rawOptionsArray = optionsString.split(",");
        const optionsArray = rawOptionsArray.map((rawOption) => {
            return rawOption.trim();
        });
        return optionsArray
    }

	async function createQuestion(e: any) {
		e.preventDefault();
		const res = await fetch(`/api/question/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				sessionId,
				question,
				options: optionsArrayFromString(optionsString),
			}),
		});
		// const data = await res.json();
		// console.log(data);

		setQuestion("");
        setOptionsString("");

		router.refresh();
	}

	return (
		<fieldset>
			<legend>create question</legend>
			<form onSubmit={createQuestion}>
				<label>
					question
					<input
						type="text"
						name="question"
						value={question}
						onChange={(e) => {
							setQuestion(e.target.value);
						}}
					/>
				</label>
                <br />
				<label>
					options (separate with commas)
					<input
						type="text"
						name="optionsString"
						value={optionsString}
						onChange={(e) => {
							setOptionsString(e.target.value);
						}}
					/>
				</label>
                <br />
				<button>create question</button>
			</form>
		</fieldset>
	);
}
