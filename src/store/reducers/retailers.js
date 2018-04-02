import * as ActionTypes from '../actions';

const initialState = {
  loading: false,
  results: [],
};

function getRetailersRequest(state) {
  return {
    ...state,
    loading: true,
    results: [],
  };
}

function getRetailersSuccess(state, action) {
  return {
    ...state,
    loading: false,
    results: action.retailers,
  };
}

function getRetailersFailure(state) {
  return {
    ...state,
    loading: false,
    results: [],
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_RETAILERS.REQUEST:
      return getRetailersRequest(state);

    case ActionTypes.GET_RETAILERS.SUCCESS:
      return getRetailersSuccess(state, action);

    case ActionTypes.GET_RETAILERS.FAILURE:
      return getRetailersFailure(state);

    default:
      return state;
  }
};

export default reducer;
