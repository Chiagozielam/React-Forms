import { FORM_SUBMIT } from "../actions/types";

const initialState = {
  user: {},
  users: []
};

export default (state = initialState, action) => {    
  switch (action.type) {
    case FORM_SUBMIT:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
};
