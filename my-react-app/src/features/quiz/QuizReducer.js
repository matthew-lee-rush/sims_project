
export const initialState = {
    status: "HOME", // HOME  | QUIZ | RESULTS
    questions: [],
    currentIndex: 0,
    score: 0,
    selectedAnswer: null, 
};

export function quizReducer(state, action) {
  switch (action.type) {
        case "START_QUIZ":
      return {
        ...state,
        status: "QUIZ",
        currentIndex: 0,
        score: 0,
      };

    case "ANSWER":
      // logic here
      return state;

    case "NEXT_QUESTION":
      // logic here
      return state;

    default:
      return state;
  }
}