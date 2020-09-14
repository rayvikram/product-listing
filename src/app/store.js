import { configureStore } from '@reduxjs/toolkit';
import listingReducer from "../features/Listings/ListingsSlice"

export default configureStore({
  reducer: {
    listing: listingReducer,
  },
});
