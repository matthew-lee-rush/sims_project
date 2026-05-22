function Results ({ state, dispatch }) {
    return (
        <div>
            <h2>Results</h2>
            <p>Your score: {state.score}</p>

            <button onClick={() => dispatch({ type: "GO_HOME" })}>
                Go Home
            </button>
        </div>
    );
}

export default Results;