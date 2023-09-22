import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    first_name: '',
    email: '',
    message: '',
  },
  submissionStatus: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setSubmissionStatus: (state, action) => {
      state.submissionStatus = action.payload;
    },
  },
});

export const { setFormData, setSubmissionStatus } = contactSlice.actions;
export default contactSlice.reducer;
