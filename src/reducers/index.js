import { START_QUIZ } from "../actions";

const initialState = {
    page: "Home",
    quiz: "",
    score: ""
};

export function rootReducer(state = initialState, action) {
    if (action.type === START_QUIZ) {
        return Object.assign({}, state, {quiz: action.payload, page: "Quiz"});
    }
    return state;
};

