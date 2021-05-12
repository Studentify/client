import { PaginationState, PaginationActions, PaginationAction } from './types';


function paginationReducer<T>(state: PaginationState<T>, action: PaginationAction): PaginationState<T> {
  switch(action.type) {
    case PaginationActions.NEXT_PAGE: {
      return {
        ...state,
        page: state.page + 1
      };
    }
    case PaginationActions.GET_ITEMS_CHUNK_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case PaginationActions.GET_ITEMS_CHUNK_SUCCESS: {
      const itemsChunk = action.payload as T[];

      return {
        ...state,
        isLoading: false,
        items: [...state.items, ...itemsChunk]
      }
    }
    case PaginationActions.UPDATE_FILTERS: {
      const filtersUpdate = action.payload;
      console.log({ filtersUpdate });

      return {
        ...state,
        items: [],
        page: 1,
        filters: {
          ...state.filters,
          ...filtersUpdate
        }
      }
    }
    case PaginationActions.SET_RESULTS_NUMBER: {
      const value = action.payload;

      return {
        ...state,
        items: [],
        page: 1,
        results: value,
      }
    }
    default:
      return state;
  }
}

export default paginationReducer; 