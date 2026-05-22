function Question({ state, dispatch }) {
    if (!state.questions.length) return <p>Loading...</p>;

    const current = state.questions[state.currentIndex];

    return (
        <div>
        <h2>Question {state.currentIndex + 1}</h2>
        <p>{current.question}</p>

        {current.answers.map((answer) => (
            <button
            key={answer}
            onClick={() =>
                dispatch({ type: "ANSWER", payload: answer })
            }
            >
            {answer}
            </button>
        ))}
        </div>
    );
}

export default Question;