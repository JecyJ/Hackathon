import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://backend.getlinked.ai';

export const fetchCategories = createAsyncThunk(
  'registration/fetchCategories',
  async () => {
    try {
      const response = await fetch(`${baseUrl}/hackathon/categories-list`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch categories');
    }
  }
);

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    formData: {
      team_name: '',
      phone_number: '',
      email: '',
      project_topic: '',
      category: '',
      group_size: '',
    },
    policy: false,
    categories: [],
    categoriesStatus: 'idle',
    categoriesError: null,
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData[action.payload.fieldName] = action.payload.fieldValue;
    },
    toggleAgreement: (state, action) => {
      if (action.payload === 'policy') {
        state.policy = !state.policy;
      } 
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    resetForm: (state) => {
      state.formData = {
        team_name: '',
        phone_number: '',
        email: '',
        project_topic: '',
        category: '',
        group_size: '',
      };
      state.policy = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesStatus = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesStatus = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesStatus = 'failed';
        state.categoriesError = action.error.message;
      });
  },
});

export const {
  updateFormData,
  toggleAgreement,
  resetForm,
  setCategories,
} = registrationSlice.actions;

export default registrationSlice.reducer;