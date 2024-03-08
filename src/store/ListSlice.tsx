import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Schedule {
  id?: string;
  name: string;
  property: string;
  phone: string;
  date: string;
  hour: string;
  symptoms: string;
}
interface AppState {
  schedules: Schedule[];
  schedule: Schedule;
  editMode: boolean;
}

const initialState: AppState = {
  schedules: [],
  editMode: false,
  schedule: {
    date: "",
    hour: "",
    name: "",
    phone: "",
    property: "",
    symptoms: "",
  },
};

export const ListSliceSlice = createSlice({
  name: "citas",
  initialState,
  reducers: {
    addSchedule: (state, action: PayloadAction<Schedule>) => {
      state.schedules.push({
        date: action.payload.date,
        hour: action.payload.hour,
        name: action.payload.name,
        phone: action.payload.phone,
        property: action.payload.property,
        symptoms: action.payload.symptoms,
        id: (new Date().getUTCMilliseconds() * Math.random()).toString(),
      });
    },
    removeSchedule: (state, action: PayloadAction<{ id: string }>) => {
      state.schedules = state.schedules.filter(
        (schedule) => schedule.id !== action.payload.id
      );

      return state;
    },
    enablingEditMode: (
      state,
      action: PayloadAction<{ schedule: Schedule }>
    ) => {
      state.editMode = true;
      state.schedule = action.payload.schedule;
    },
    editSchedule: (state, action: PayloadAction<Schedule>) => {
      state.schedules = state.schedules.map((schedule) => {
        if (schedule.id === action.payload.id) {
          schedule = {
            date: action.payload.date,
            hour: action.payload.hour,
            phone: action.payload.phone,
            name: action.payload.name,
            property: action.payload.property,
            symptoms: action.payload.symptoms,
          };
          return schedule;
        } else {
          return schedule;
        }
      });

      state.editMode = false;
      state.schedule = {
        date: "",
        hour: "",
        name: "",
        phone: "",
        property: "",
        symptoms: "",
      };

      return state;
    },
  },
});

export const { addSchedule, removeSchedule, editSchedule, enablingEditMode } =
  ListSliceSlice.actions;

export default ListSliceSlice.reducer;
