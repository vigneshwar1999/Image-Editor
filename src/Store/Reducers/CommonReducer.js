import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFile: "",
  selectedBackgroungColor: "#ffffff"
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setSelectedFile(state, action) {
      state.selectedFile = action.payload;
    },
    setSelectedBackgroungColor(state, action) {
      state.selectedBackgroungColor = action.payload;
    },
  },
});
export const commonActions = commonSlice.actions;
export default commonSlice.reducer;
