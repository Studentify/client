import { useReducer, useEffect } from 'react';

import paginationReducer from './paginationReducer';
import { PaginationState, PaginationActions, PaginationReducer } from './types';


interface UsePagination<T> {
  page: number;
  items: T[];
  isLoading: boolean;
  results: number;
  nextPage: () => void;
  setResultsNumber: (value: number) => void;
  setQueryParams: (filters: { [key: string]: string | number | boolean }) => void;
}

// TODO Enable more custom config and implement custom config parsing
// TODO Implement stop fetching condition when there is no more items (kind of API specific)
export default function usePagination<T>(baseUrl: string, resultsNumber = 20): UsePagination<T> {
  const initialPaginationState = getInitialPaginationState<T>(resultsNumber);
  const [paginationState, dispatch] = useReducer<PaginationReducer<T>>(paginationReducer, initialPaginationState);
  const { items, page, results, isLoading, filters } = paginationState;
  
  const nextPage = () => {
    dispatch({ type: PaginationActions.NEXT_PAGE });
  }

  const setResultsNumber = (value: number) => {
    dispatch({ type: PaginationActions.SET_RESULTS_NUMBER, payload: value });
  }

  const setQueryParams = (filters: {[key: string]: string | number | boolean}) => {
    dispatch({
      type: PaginationActions.UPDATE_FILTERS,
      payload: filters,
    })
  }

  useEffect(() => {
    const queryString = buildQueryString();

    const url = `${baseUrl}?${queryString}`;
    
    dispatch({ type: PaginationActions.GET_ITEMS_CHUNK_REQUEST });
    fetchItemsChunk(url);

    // local functions 
    async function fetchItemsChunk(url: string) {
      fetch(url)
        .then(res => res.json())
        .then(data => dispatch({ type: PaginationActions.GET_ITEMS_CHUNK_SUCCESS, payload: data.results }))
    }

    function buildQueryString() {
      const queryParams = new URLSearchParams([
        ['page', page.toString()], 
        ['results', results.toString()],
        ...Object.entries(filters).map(([ name, value ]) => [name, value.toString()])
      ]);
  
      return queryParams.toString();
    }
  }, [page, results, filters, baseUrl])
  
  return { page, items, isLoading, results, nextPage, setResultsNumber, setQueryParams };
}


function getInitialPaginationState<T>(resultsNumber: number): PaginationState<T> {
  return {
    items: [],
    isLoading: false,
    page: 1,
    results: resultsNumber,
    filters: {
      seed: 'a9678d2bbaa96974',
    },
  }
}