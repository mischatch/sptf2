import { connect } from 'react-redux';
import Events from '../components/events';
import { getAllEvents } from '../actions/eventActions';

const mapStateToProps = (state, ownprops) => {
  return {
    events: state.events,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllEvents: () => dispatch(getAllEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
