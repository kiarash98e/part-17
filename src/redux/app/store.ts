import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import Form from '../reducer/formRedux'


export const store = configureStore({
  reducer: {
    form: Form
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
