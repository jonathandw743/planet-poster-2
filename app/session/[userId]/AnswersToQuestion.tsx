export default function AnswersToQuestion({ question }: any) {
    let mean = 0;
    let canAverage = true;
    if (question.answers.length === 0) {
        canAverage = false;
    } else {
        for (const answer of question.answers) {
            const answerAsFloat = parseFloat(answer.answer);
            if (Number.isNaN(answerAsFloat)) {
                canAverage = false;
                break;
            }
            mean += answerAsFloat;
        }
    }
    if (canAverage) {
        mean /= question.answers.length;
    }
    return <fieldset>
        <legend>{question.question}</legend>
        <p>{question.answers.map((answer: any) => (
            <>{answer.user.nickname}: {answer.answer}, </>
        ))}</p>
        
        {canAverage ? <p>mean average: {mean}</p> : <></>}
    </fieldset>;
}