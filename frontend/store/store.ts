// frontend/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import departmentsReducer, { fetchDepartmentsAsync } from './departmentsSlice';

const store = configureStore({
  reducer: {
    departments: departmentsReducer,
  },
});

store.dispatch(fetchDepartmentsAsync());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
