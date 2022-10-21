import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../hooks';


export const FabAddNew = () => {
  
  const { openDateModal } = useUiStore();
  const { SetActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
    SetActiveEvent({
        _id: new Date().getTime(),
        title: '',
        notes: '',
        start: new Date(),
        end: addHours( new Date(), 2 ),
        bgColor: '#FAFAFA',
        user: {
            _id: 123,
            name: 'Josue',
        },
    });
    openDateModal();
  };
  
  
  return (
    <button
        className="btn btn-primary fab"
        onClick={ handleClickNew }
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
