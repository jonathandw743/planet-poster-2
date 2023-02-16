"use client";

import { useState } from "react";

export default function Questions({ questions }: any) {
	const [question, setQuestion] = useState();

	return (
		<>
			questions

			<ul>
				{questions.map((question: any, i: number) => (
					<li key={i}>
						<button
							onClick={() => {
								setQuestion(question);
							}}
						>
							{question.question}
						</button>
					</li>
				))}
			</ul>
		</>
	);
}
