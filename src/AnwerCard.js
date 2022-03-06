const AnswerCard = ({answer,selectAnswer,selectedAnswer,correctAnswer})=>{
    const isRightAnswer= selectedAnswer && answer === correctAnswer
    const isWrongAnswer= selectedAnswer && answer !== correctAnswer
    const correctClass=  isRightAnswer ? 'correct-answer':''
    const wrongClass= isWrongAnswer ? 'incorrect-answer':''
    const disableClass= selectedAnswer ? 'disable-answer':''
    return(
        <div>
            <h4 onClick={()=>selectAnswer(answer)}>{answer}</h4>
        </div>
    )
}

export default AnswerCard