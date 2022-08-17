import { configureStore } from '@reduxjs/toolkit';
import emanetReducer from '../features/emanet/Slices/emanetSlice';
import planBiReducer from '../features/planBi/Slices/planBiSlice';



export const store = configureStore({
  reducer: {
    planBi: planBiReducer,
    emanet: emanetReducer,
  },
});