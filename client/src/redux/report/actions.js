import { SET_SUBJECT_SELECTED } from './reducer'

export const setSubjectSelected = (subject) => {
    return {
        type: SET_SUBJECT_SELECTED,
        payload: subject
    }
}