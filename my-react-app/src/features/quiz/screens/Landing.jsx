function Landing({ dispatch }) {
    return (
        <div>
            <h1>Quiz App</h1>
            <button onClick={() => dispatch({ type: "START_QUIZ" })}>
                Start Quiz
            </button>
        </div>
    );
}

export default Landing;
