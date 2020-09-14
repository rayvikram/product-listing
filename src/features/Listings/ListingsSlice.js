import { createSlice } from '@reduxjs/toolkit';

export const listingSlice = createSlice({
  name: 'listing',
  initialState: {
    productList: [],
    loader: false,
    wishlist: 0
  },
  reducers: {
    setListing: (state, action) => {
      state.productList = action.payload;
    },
    setLoader: (state, action) => {
        state.loader = action.payload;
    },
    increment: state => {
      state.wishlist += 1;
    },
  },
});

export const { setListing, setLoader, increment } = listingSlice.actions;

export const setListingsData = data => dispatch => {
    dispatch(setLoader(true))
  setTimeout(() => {
    dispatch(setListing(data));
    dispatch(setLoader(false))
  }, 1000);
};

export default listingSlice.reducer;
