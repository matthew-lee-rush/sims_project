import { useReducer } from "react";
import questionsData from "../data/questions";
import { shuffleArray } from "../utils/shuffle";


const initialState = {
  screen: "landing",
  questions: [],
  currentIndex: 0,
  answers: [],
  score: 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "START_QUIZ":
      const shuffledQuestions = shuffleArray(questionsData).slice(0, 5);
      return {
        ...state,
        screen: "question",
        questions: shuffledQuestions,
        currentIndex: 0,
        answers: [],
        score: 0,
      };

      case "ANSWER":
        const currentQuestion = state.questions[state.currentIndex];
        const isCorrect = action.payload === currentQuestion.correct;

        const nextIndex = state.currentIndex + 1;

        return {
            ...state,
            currentIndex: nextIndex,
            answers: [...state.answers, action.payload],
            score: isCorrect ? state.score + 1 : state.score,
            screen:
                nextIndex >= state.questions.length
                    ? "results"
                    : "question",

        };

    case "GO_HOME":
        return initialState;

    default:
        return state;
    }
}

export default function useQuizEngine() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return { state, dispatch };
}