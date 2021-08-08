export const setSortBy = ({type, order}) => ({
  type: 'SET_SORT_BY',
  payload: {type, order}
});

export const setFilterBy = (type) => ({
  type: 'SET_FILTER_BY',
  payload: type
});

export const setFilterAll = (type) => ({
  type: 'SET_FILTER_ALL',
  payload: type
});

