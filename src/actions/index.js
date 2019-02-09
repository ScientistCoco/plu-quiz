export const START_QUIZ = "START_QUIZ";

export function startQuiz(payload) {
    return { type: START_QUIZ, payload }
};