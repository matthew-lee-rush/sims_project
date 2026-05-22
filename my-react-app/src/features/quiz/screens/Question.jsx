import QuestionCard from "../components/QuestionCard";
import AnswerButton from "../components/AnswerButton.jsx";

function Question({ state, dispatch }) {
  const q = state.questions[state.currentIndex];

  return (
    <div>
      <QuestionCard question={q.question} />

      {q.answers.map((a) => (
        <AnswerButton
          key={a}
          answer={a}
          onClick={() =>
            dispatch({ type: "ANSWER", payload: a })
          }
        />
      ))}
    </div>
  );
}

export default Question;