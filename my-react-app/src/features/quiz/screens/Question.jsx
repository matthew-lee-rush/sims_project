import QuestionCard from "../components/QuestionCard";
import AnswerButton from "../components/AnswerButton.jsx";
import ExitButton from "../components/ExitButton";

function Question({ state, dispatch }) {
   const q = state.questions[state.currentIndex];

   const handleAnswer = (answer) => {
    // prevent multiple answers
    if (state.selectedAnswer) return;

    dispatch({ type: "ANSWER", payload: answer });
  };

  const handleNext = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  return (
    <div className="question-screen">
      <QuestionCard question={q} />

      <div className = "answer-options">
      {q.answers.map((a) => (
        <AnswerButton
          key={a}
          answer={a}
          onClick={() => handleAnswer(a)}
          disabled={!!state.selectedAnswer}
        />
      ))}
      </div>

      {/* Show Next button ONLY after answering */}
      {state.selectedAnswer && (
        <button className="exit-button-wrap" onClick={handleNext}>
          Next Question
        </button>
      )}

      <ExitButton
        onClick={() => dispatch({ type: "GO_HOME" })}
      />
    </div>
  );
}

export default Question;