const GameOver = ({resetQuiz,gameScore})=>{
    return (
        <div>
            <h1>Total score: {gameScore} </h1>
            <h2>Game Over</h2>
            <button onClick={resetQuiz}>Reset Game</button>
        </div>
    )
}

export default GameOver