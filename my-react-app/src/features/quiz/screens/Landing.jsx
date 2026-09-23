function Landing({ dispatch }) {
    return (
        <div>

            <h1>The Sims Quiz</h1>

            <div className="landing-actions">
                <button className="button" onClick={() => dispatch({ type: "GO_INFO" })}>
                    Learn More
                </button>

                <button className="button"  onClick={() => dispatch({ type: "START_QUIZ" })}>
                    Start Quiz
                </button>
            </div>
        </div>
    );
}

export default Landing;
