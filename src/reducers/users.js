import { RECEIVE_USERS, ADD_USER_QUESTION } from "./../actions/users";
import { SAVE_ANSWER } from "./../actions/answers";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case SAVE_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.id]: action.answer,
                    },
                },
            };
        case ADD_USER_QUESTION:
            const { author, id } = action.question;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: [...state[author].questions, id],
                },
            };
        default:
            return state;
    }
}
