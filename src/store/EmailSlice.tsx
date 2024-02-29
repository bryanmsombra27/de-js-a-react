import {
  PayloadAction,
  PayloadActionCreator,
  createSlice,
} from "@reduxjs/toolkit";

export interface Email {
  id?: string;
  title: string;
  email: string;
  message: string;
  isSend: boolean;
}

const initialState: Email[] = [];

export const EmailSliceSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    addNewEmail: (state, action: PayloadAction<Email>) => {
      const newEmail: Email = {
        id: `${Math.random() * 10}${new Date().getMilliseconds()}`,
        email: action.payload.email,
        isSend: action.payload.isSend,
        message: action.payload.message,
        title: action.payload.title,
      };
      state.push(newEmail);
    },
    removeEmail: (state, action: PayloadAction<string>) => {
      state = state.filter((item) => item.id !== action.payload);
      return state;
    },
    reSendEmail: (state, action: PayloadAction<string>) => {
      state = state.map((item) => {
        if (item.id === action.payload) {
          // item.isSend = true;
          return {
            ...item,
            isSend: true,
          };
        } else {
          return item;
        }
      });
      return state;
    },
  },
});

export const { addNewEmail, removeEmail, reSendEmail } =
  EmailSliceSlice.actions;

export default EmailSliceSlice.reducer;
