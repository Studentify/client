export enum PaginationActions {
  UPDATE_FILTERS = "UPDATE_FILTERS",
  GET_ITEMS_CHUNK_REQUEST = "GET_ITEMS_CHUNK_REQUEST",
  GET_ITEMS_CHUNK_SUCCESS = "GET_ITEMS_CHUNK_SUCCESS",
  SET_RESULTS_NUMBER = "SET_RESULTS_NUMBER",
  NEXT_PAGE = "NEST_PAGE"
}


export interface PaginationState<T> {
  items: T[];
  isLoading: boolean;
  page: number;
  results: number;
  filters: {
    [key: string]: string | number | boolean;
  }
}

export type PaginationReducer<T> = (state: PaginationState<T>, action: PaginationAction) => PaginationState<T>;



// Interfaces and type for pagination pactions

interface UpdateFilters {
  type: typeof PaginationActions.UPDATE_FILTERS;
  payload: {
    [key: string]: number | string | boolean;
  }
}

interface GetItemsChunkRequest {
  type: typeof PaginationActions.GET_ITEMS_CHUNK_REQUEST;
}

interface GetItemsChunkSuccess {
  type: typeof PaginationActions.GET_ITEMS_CHUNK_SUCCESS;
  payload: Object[];
}


interface SetResultsNumber {
  type: typeof PaginationActions.SET_RESULTS_NUMBER;
  payload: number;
}

interface NextPage {
  type: typeof PaginationActions.NEXT_PAGE;
}

export type PaginationAction = 
  UpdateFilters | 
  GetItemsChunkRequest | 
  GetItemsChunkSuccess | 
  SetResultsNumber | 
  NextPage;