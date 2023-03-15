import Answer from "./Answer";

export default function Answers({questions}: any) {
    return (
        <fieldset>
            <legend>answers</legend>
            {questions.map((question: any) => (
                <Answer question={question} />
            ))}
        </fieldset>
    )
}