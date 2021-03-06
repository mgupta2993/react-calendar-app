import {
  GET_MONTH,
  GET_WEEKNAMES,
  SET_DATE,
  SHOW_CALENDAR,
  HIDE_CALENDAR,
  HIDE_DIALOG,
  SHOW_DIALOG,
} from "../actions/month.action";
import MonthService from "../services/month.service";
import { IMonthState } from "../../models";
const intialData: IMonthState = {
  totalNumberOfDays: 0,
  weekNames: [],
  selectedDate: MonthService.getTodayDate(),
  visible: true,
  showDialog: false,
};

const month = (state = intialData || undefined, action: any): IMonthState => {
  switch (action.type) {
    case GET_MONTH:
      const { month, year } = action.payload;
      const totalNumberOfDays = MonthService.getNumberOfDayForMonth(
        month,
        year
      );
      return { ...state, totalNumberOfDays };

    case GET_WEEKNAMES:
      const weekNames = MonthService.getWeekNames();
      return { ...state, weekNames };

    case SET_DATE:
      const date = action.payload;
      return { ...state, selectedDate: date };

    case SHOW_CALENDAR:
      const show = action.payload;
      return { ...state, visible: show };
    case HIDE_CALENDAR:
      const hide = action.payload;
      return { ...state, visible: hide };

    case SHOW_DIALOG:
      return { ...state, showDialog: true };

    case HIDE_DIALOG:
      return { ...state, showDialog: false };

    default:
      return { ...state };
  }
};

export { month };
