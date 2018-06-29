import * as EventUtil from '../utils/eventUtils';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';

const initialState = {
  events: [],
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
