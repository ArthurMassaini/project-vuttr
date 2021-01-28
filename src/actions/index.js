// import * as api from '../services/api';

const FILTERS = 'FILTERS';

export const setFilters = (filterText, filterTag) => ({
  type: FILTERS,
  filterText,
  filterTag,
});
