const SIGN_IN = 'SIGN_IN';

const INITIAL_STATE = {
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default filters;
