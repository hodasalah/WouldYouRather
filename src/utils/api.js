import { _getUsers, _getQuestions, _saveQuestion, _saveAnswer } from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveAnswer(info) {
  return _saveAnswer(info);
}

export function saveQuestion(info) {
  return _saveQuestion(info);
}
