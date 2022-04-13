import { createAction, createReducer } from '@reduxjs/toolkit'

export const setResponseError = createAction('SET_RESPONSE_ERROR');

export const responseErrorReducer = createReducer( false , {
    [setResponseError]: (state, action) => action.payload,
});