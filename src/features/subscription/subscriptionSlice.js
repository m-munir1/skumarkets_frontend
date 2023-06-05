import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plans: [],
  lastPlan: {},
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setSubscriptions: (state, { payload }) => {
      state.plans = payload;
      state.lastPlan = payload[0];
    },

    addSubscription: (state, { payload }) => {
      state.plans = [payload, ...state.plans];
      state.lastPlan = payload;
    },

    cancelSubscription: (state, {payload}) => {
      const item = state.plans.find(plan => plan._id === payload.prevId);
      item.plan_status = 'inactive';
      state.plans = [payload.newData, ...state.plans];
      state.lastPlan = payload.newData;
    },

  },
});


export const { setSubscriptions, addSubscription, cancelSubscription } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
