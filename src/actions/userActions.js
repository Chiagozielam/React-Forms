import {FORM_SUBMIT, GET_USER} from './types'

export const addUser = (inputs, dispatch) => {
    dispatch( {type: FORM_SUBMIT, payload: inputs  } )
}