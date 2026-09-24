function Results ({ state, dispatch }) {
    return (
        <div>
            <h1 className="h1">The Sims Quiz</h1>
            
            <h2>Results</h2>
            <p className = "results-display">Your score: {state.score} / 10</p>

            <button className="button" onClick={() => dispatch({ type: "GO_HOME" })}>
                Go Home
            </button>
        </div>
    );
}

export default Results;