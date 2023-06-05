import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addCampaignMode: false,
};

export const adboardSlice = createSlice({
  name: 'Adboard',
  initialState,
  reducers: {
    toggleCampaignMode: (state) => {
      state.addCampaignMode = !state.addCampaignMode;
    },
  },
});

export const { toggleCampaignMode } = adboardSlice.actions;

export default adboardSlice.reducer;
