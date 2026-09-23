function Results ({ state, dispatch }) {
    return (
        <div>
            <h1>The Sims Quiz</h1>
            
            <h2>Results</h2>
            <p>Your score: {state.score}</p>

            <button className="button" onClick={() => dispatch({ type: "GO_HOME" })}>
                Go Home
            </button>
        </div>
    );
}

export default Results;