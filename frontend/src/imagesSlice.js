import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "sport",
  page: 1,
  selectedImage: null,
  sortBy: "date",
  images: [],
  status: "loading",
};

export const countSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      return { ...state, category: action.payload };
    },
    setStatus: (state, action) => {
      return { ...state, status: action.payload };
    },
    setImages: (state, action) => {
      return { ...state, images: action.payload };
    },
    setSelectedImage: (state, action) => {
      return { ...state, selectedImage: action.payload };
    },
    nextPage: (state) => {
      return {
        ...state,
        page: state.page + 1,
      };
    },
    prevPage: (state) => {
      return {
        ...state,
        page: state.page > 1 ? state.page - 1 : state.page,
      };
    },
  },
});

export const {
  setCategory,
  setStatus,
  setImages,
  setSelectedImage,
  nextPage,
  prevPage,
} = countSlice.actions;

export default countSlice.reducer;
