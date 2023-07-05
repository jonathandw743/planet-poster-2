"use client";

import { useState } from "react";
import AnswersToQuestions from "./AnswersToQuestions";
import Question from "./Question";

export default function Questions({ questions, userId }: any) {
	const [question, setQuestion] = useState({});

	return (
		<fieldset>
			<legend>questions</legend>
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
			<Question question={question} userId={userId}/>
		</fieldset>
	);
}
