import * as api from '../services/api';

const FILTERS = 'FILTERS';
const TOOLS = 'TOOLS';

export const setFilters = (filterText, filterTag) => ({
  type: FILTERS,
  filterText,
  filterTag,
});

//----------------------------------------------------------

const readTools = (allTools) => ({
  type: TOOLS,
  allTools,
});

export function fetchCurrenciesThunk() {
  return async (dispatch) => {
    const data = await api.fetchAllTools();
    dispatch(readTools(data));
  };
}
