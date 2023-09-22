import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faqVisibility: [false, false, false, false, false, false],
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    toggleFaqVisibility: (state, action) => {
      const { index } = action.payload;
      state.faqVisibility[index] = !state.faqVisibility[index];
    },
  },
});

export const { toggleFaqVisibility } = faqSlice.actions;

export default faqSlice.reducer;
