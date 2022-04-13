import { createAction, createReducer } from '@reduxjs/toolkit'

export const setLoading = createAction('SET_LOADING');

export const LoadingReducer = createReducer( false , {
    [setLoading]: (state, action) => action.payload,
});