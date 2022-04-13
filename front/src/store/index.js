import { configureStore } from "@reduxjs/toolkit";
import { artistAndAlbumsReducer } from "./artistAndAlbums";
import { responseErrorReducer } from "./clientError";
import { LoadingReducer } from "./loading";

export default configureStore({
    reducer: {
      artistAndAlbums: artistAndAlbumsReducer,
      loading: LoadingReducer,
      responseError: responseErrorReducer,
    }
});