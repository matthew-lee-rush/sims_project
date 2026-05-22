import useQuizEngine from "./hooks/useQuizEngine";
import Landing from "./screens/Landing";
import Info from "./screens/Info";
import Loading from "./screens/Loading";
import Error from "./screens/Error";
import Question from "./screens/Question";
import Results from "./screens/Results";

function QuizApp() {
  const { state, dispatch } = useQuizEngine();

  switch (state.screen) {
    case "landing":
      return <Landing dispatch={dispatch} />;

    case "info":
      return <Info state={state} dispatch={dispatch} />;

    case "loading":
      return <Loading />;

    case "error":
      return <Error dispatch={dispatch} />;

    case "question":
      return <Question state={state} dispatch={dispatch} />;

    case "results":
      return <Results state={state} dispatch={dispatch} />;

    default:
      console.warn("Unknown screen:", state.screen);
      return <Landing dispatch={dispatch} />;
  }
}

export default QuizApp;