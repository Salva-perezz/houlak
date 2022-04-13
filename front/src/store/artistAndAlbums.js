import { createAction, createReducer } from '@reduxjs/toolkit'

export const setArtistAndAlbums = createAction('SET_ARTIST_AND_ALBUMS');

export const artistAndAlbumsReducer = createReducer( false , {
    [setArtistAndAlbums]: (state, action) => action.payload,
});