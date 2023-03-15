export default function Answer({question}: any) {
    return <fieldset>
        <legend>answer</legend>
        <p>question: {question.question}</p>
        {question.answers.map((answer: any) => (
            <p>{answer.user.nickname}: {answer.answer}</p>
        ))}
    </fieldset>;
}