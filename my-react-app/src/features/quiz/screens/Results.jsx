function Results ({ state, dispatch }) {
    return (
        <div>
            <h1>Results</h1>
            <p className = "results-display">Your score: {state.score} / 10</p>

            <button className="button" onClick={() => dispatch({ type: "GO_HOME" })}>
                Go Home
            </button>
        </div>
    );
}

export default Results;