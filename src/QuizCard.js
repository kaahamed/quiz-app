import AnswerCard from "./AnwerCard"

const QuizCard = ({selectedQuestion, navigateNextQuiz, selectAnswer,correctAnswer})=>{
    const {question,answers,selectedAnswer} = selectedQuestion
    
    return(
        <div>
            <h1>{question}</h1>
            {answers.map((answer, i)=><AnswerCard 
            selectedAnswer={selectedAnswer}
            correctAnswer={correctAnswer}
            key={i} 
            answer={answer} selectAnswer={selectAnswer}/>)}
            <button onClick={navigateNextQuiz}>Next Question</button>
        </div>
    )
}

export default QuizCard