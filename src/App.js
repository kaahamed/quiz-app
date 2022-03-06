import { useState } from 'react';
import './App.css';
import shuffle from './utils';
import QuizCard from './QuizCard'
import GameOver from './GameOver';


function App() {
  const [quizzes, setQuizzes] = useState(null)
  const [startGame, setStartGame] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [selectedQuestionIndex,setSelectedQuestionIndex] = useState(0)
  const [selectedAnswer,setSelectedAnswer] = useState(null)
  const [endGame, setEndGame] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [gameScore,setGameScore] = useState(0)
  const quizStart = async ()=>{
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple')
    const {results} = await res.json()
    setQuizzes(results)
    setStartGame(true)
    setSelectedQuestion({
      question:results[0].question,
      answers:shuffle(results[0])
    })
    setLoaded(true)
  }

  const navigateNextQuiz = ()=>{
    const isLastQuestion = quizzes.length - 1 === selectedQuestionIndex

    if(isLastQuestion){
      setEndGame(true)
    }else{
      setSelectedQuestionIndex(prevIndex=>prevIndex+1)
      setSelectedQuestion({
        question:quizzes[selectedQuestionIndex].question,
        answers:shuffle(quizzes[selectedQuestionIndex])
      })
      setCorrectAnswer(quizzes[selectedQuestionIndex].correct_answer)
    }

  }

  const selectAnswer = (answer)=>{
    setSelectedAnswer(answer)
    if(answer === correctAnswer){
      setGameScore(prevScore=>prevScore + 1)
    }
  }

  const resetQuiz = ()=>{
    setQuizzes(null)
    setStartGame(false)
    setLoaded(false)
    setSelectedQuestion(null)
    setSelectedQuestionIndex(0)
    setEndGame(false)

  }
  return (
    <div className='App'>
      {endGame && <GameOver resetQuiz={resetQuiz} gameScore={gameScore}/>}
      {startGame && loaded && !endGame &&<QuizCard 
      selectedQuestion={selectedQuestion}
      navigateNextQuiz={navigateNextQuiz}
      selectAnswer={selectAnswer}
      selectedAnswer={selectedAnswer}
      correctAnswer={correctAnswer}
      />}
      {!startGame && <button onClick={quizStart}>Start quiz</button> } 
    </div>
  )
}

export default App;
