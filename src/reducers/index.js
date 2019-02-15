import { START_QUIZ, GET_QUIZ_RESULTS, GO_TO_START } from "../actions";

const initialState = {
    page: "Score",
    quiz: "",
    score: 0,
    totalQuestions: 0,
    incorrectQuestions: [],
};

export function rootReducer(state = initialState, action) {
    if (action.type === START_QUIZ) {
        return Object.assign({}, state, {quiz: action.payload, page: "Quiz"});
    } else if (action.type === GET_QUIZ_RESULTS) {
        return Object.assign({}, state, 
            {score: action.payload.score, totalQuestions: action.payload.totalQuestions, 
            incorrectQuestions: action.payload.incorrectQuestions, page: "Score"});
    } else if (action.type === GO_TO_START) {
        return Object.assign({}, state, {page: "Home"});
    }
    return state;
};

