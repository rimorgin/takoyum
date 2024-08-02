import { createSlice } from '@reduxjs/toolkit';

const colorSchemeSlice = createSlice({
  name: 'colorScheme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    toggleColorScheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleColorScheme } = colorSchemeSlice.actions;
export const selectColorScheme = (state) => state.colorScheme.theme;
export default colorSchemeSlice.reducer;
