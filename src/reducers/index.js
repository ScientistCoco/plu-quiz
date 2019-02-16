import { START_QUIZ, GET_QUIZ_RESULTS, GO_TO_START } from "../actions";
import { BEANS, COMMON_FRUITS, COMMON_VEGETABLES, CHINESE_VEGETABLES, HERBS, POTATOES, SQUASH, TOMATOES } from "../items";

const initialState = {
    page: "Home",
    quiz: "",
    score: 0,
    questionDeck: [],
    totalQuestions: 0,
    incorrectQuestions: [],
};

function getQuizQuestions(type) {
    switch(type) {
        case "Beans": 
            return BEANS;
        case "Chinese vegetables":
            return CHINESE_VEGETABLES
        case "Common fruits":
            return COMMON_FRUITS
        case "Common vegetables": 
            return COMMON_VEGETABLES;
        case "Herbs":
            return HERBS;
        case "Potatoes":
            return POTATOES;
        case "Squash":
            return SQUASH;
        case "Tomatoes":
            return TOMATOES
        default:
            return;
    }
}

export function rootReducer(state = initialState, action) {
    if (action.type === START_QUIZ) {
        var q = getQuizQuestions(action.payload);
        return Object.assign({}, state, {quiz: action.payload, page: "Quiz", questionDeck: q});
    } else if (action.type === GET_QUIZ_RESULTS) {
        return Object.assign({}, state, 
            {score: action.payload.score, totalQuestions: action.payload.totalQuestions, 
            incorrectQuestions: action.payload.incorrectQuestions, page: "Score"});
    } else if (action.type === GO_TO_START) {
        return Object.assign({}, state, {page: "Home"});
    }
    return state;
};

