import _ from 'lodash';
import {
  READ_EVENTS,
  GET_EVENT,
  DELETE_EVENT,
} from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    case GET_EVENT:
      const { data } = action.response;
      return { ...events, [data.id]: data };
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
