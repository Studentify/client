import { TypedUseSelectorHook, useSelector as _useSelector, useDispatch as _useDispatch } from 'react-redux';
import type { StoreState } from 'state/rootReducer';

export const useSelector: TypedUseSelectorHook<StoreState> = _useSelector;
export const useDispatch = _useDispatch;