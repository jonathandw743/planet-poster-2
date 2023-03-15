"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Question({ question, userId }: any) {
	const [selectedOption, setSelectedOption] = useState();

	const router = useRouter();

	async function optionsOnChange(e: any) {
		setSelectedOption(e.target.value);

		console.log({userId});
		
		const answerRes = await fetch(`/api/answer`, {
            method: "POST",
            headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
                questionId: question.id,
				userId: userId,
				answer: e.target.value,
			}),
        });

        const answer = await answerRes.json();

        console.log(answer);

		router.refresh();
	}

	return (
		<fieldset>
			<legend>question: {question.question ?? "not selected"}</legend>
			<form>
				{question.options &&
					question.options.map((option: string, i: number) => (
						<div key={i}>
							<label>
								<input type="radio" value={option} onChange={optionsOnChange} checked={option === selectedOption} />
								{option}
							</label>
							<br />
						</div>
					))}
			</form>
		</fieldset>
	);
}
