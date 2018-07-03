import * as EventUtil from '../utils/eventUtils';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';

const initialState = {
  events: [],
};

const EventsReducer = (state = initialState, action) => {
  let nextState;
  nextState = merge({}, state);
  const { events } = nextState;

  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
    return {
      ...state,
      events: action.events,
    };
    default:
      return state;
  }
};


export const receiveAllEvents = (events) => {
  return {
    type: RECEIVE_ALL_EVENTS,
    events
  };
};

export const fetchAllEvents = () => display => {
  EventUtil.fetchEvents()
    .then(events => dispatch(receiveAllEvents(events)));
};

export default EventsReducer;
