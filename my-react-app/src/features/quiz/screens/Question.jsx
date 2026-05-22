import QuestionCard from "../components/QuestionCard";
import AnswerButton from "../components/AnswerButton.jsx";
import ExitButton from "../components/ExitButton";

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
      <ExitButton onClick={() => dispatch({ type: "GO_HOME" })} />
    </div>
  );
}

export default Question;