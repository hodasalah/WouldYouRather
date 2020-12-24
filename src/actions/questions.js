import { saveQuestion } from "./../utils/api";
import { showLoading } from "react-redux-loading";
import { hideLoading } from "react-redux-loading";
import { addUserQuestion } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION ";

//Recieve Questions
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}
//Save Question
function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

//async save Question
export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestion({ optionOneText, optionTwoText, author })
            .then((question) => {
                dispatch(addQuestion(question));
                return question;
            })
            .then((question) => dispatch(addUserQuestion(question)))
            .then(() => dispatch(hideLoading()));
    };
}
