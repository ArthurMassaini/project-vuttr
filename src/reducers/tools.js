const TOOLS = 'TOOLS';

const INITIAL_STATE = {
  allTools: [],
};

const tools = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOOLS:
      return {
        ...state,
        allTools: [...action.allTools],
      };
    default:
      return state;
  }
};

export default tools;
