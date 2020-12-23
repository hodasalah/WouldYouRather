import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/questions";
import { SAVE_ANSWER } from "../actions/answers";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case SAVE_ANSWER:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.answer]: {
                        ...state[action.id][action.answer],
                        votes: state[action.id][action.answer].votes.concat([
                            action.authedUser,
                        ]),
                    },
                },
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            };

        default:
            return state;
    }
}
