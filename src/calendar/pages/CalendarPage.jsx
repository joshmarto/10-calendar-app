import { useState  } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
 
import { addHours } from 'date-fns'
import { Navbar, CalendarEvent, CalendarModal } from '../';

import { getMessagesES, localizer } from '../../helpers';
import { useUiStore } from '../../hooks';
import { useCalendarStore } from '../../hooks';
 

export const CalendarPage = () => { 

  const { openDateModal } = useUiStore();
  const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'week' );
  const { events } = useCalendarStore();

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
       backgroundColor: '#84 347CF7',
       borderRadius: '0px',
       opacity: 0.8,
       color: 'white',
    };

    return {
      style,
    };
  }

  const onDoubleClick = ( event ) => {
    // console.log({ doubleClick: event });
    openDateModal();
  }

  const onSelect = ( event ) => {
    console.log({ click: event });
  }

  const onViewChange = ( event ) => {
    localStorage.setItem( 'lastView', event );
    setLastView( event );
  }



  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesES() }
        eventPropGetter={  eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChange }
      />


      <CalendarModal />


    </>
  )
}
