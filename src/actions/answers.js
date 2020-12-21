import { saveAnswer } from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading'

export const SAVE_ANSWER = 'SAVE_ANSWER'

function saveAnswerAction({authedUser, id, answer}){
    return {
        type: SAVE_ANSWER,
        authedUser,
        id,
        answer
    }
}

export function handleSaveAnswer({authedUser, id, answer}){
    return (dispatch)=>{
        dispatch(showLoading());
        return saveAnswer({authedUser, id, answer})
            .then(()=> dispatch(saveAnswerAction({authedUser, id, answer})))
            .then(()=> dispatch(hideLoading()));
    }
}