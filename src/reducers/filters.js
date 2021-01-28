const FILTERS = 'FILTERS';

const INITIAL_STATE = {
  filterText: '',
  filterTag: false,
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTERS:
      return {
        ...state,
        filterText: action.filterText,
        filterTag: action.filterTag,
      };
    default:
      return state;
  }
};

export default filters;
