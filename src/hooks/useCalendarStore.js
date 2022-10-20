import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent, } = useSelector( state => state.calendar );
  
    const SetActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    };
  
    return {
        //* Properties
        events,
        activeEvent,

        //* Methods
        SetActiveEvent,
    }
}
