import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent, } = useSelector( state => state.calendar );
  
    const SetActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    };

    const startSavingEvent = async ( calendarEvent ) => {
        // TODO: get to the backend
        
        // All well
        if ( calendarEvent._id ){
            // Updating
        } else{
            // Creating
            dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime(), } ) );
        }

    }
  
    return {
        //* Properties
        events,
        activeEvent,

        //* Methods
        SetActiveEvent,
        startSavingEvent,
    }
}
