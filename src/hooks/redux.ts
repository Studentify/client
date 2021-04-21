import { TypedUseSelectorHook, useSelector as _useSelector } from 'react-redux';
import type { StoreState } from 'state/rootReducer';


export const useSelector: TypedUseSelectorHook<StoreState> = _useSelector;