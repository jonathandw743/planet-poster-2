import AnswersToQuestion from "./AnswersToQuestion";

export default function AnswersToQuestions({questions}: any) {
    return (
        <fieldset>
            <legend>answers</legend>
            {questions.map((question: any) => (
                <AnswersToQuestion question={question} />
            ))}
        </fieldset>
    )
}