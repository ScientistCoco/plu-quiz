export const START_QUIZ = "START_QUIZ";
export const GET_QUIZ_RESULTS = "GET_QUIZ_RESULTS";
export const GO_TO_START = "GO_TO_START";

export function startQuiz(payload) {
    return { type: START_QUIZ, payload }
};

export function getQuizResults(payload) {
    return { type: GET_QUIZ_RESULTS, payload }
};

export function goToStart() {
    return { type: GO_TO_START }
};