import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPageTitle} from '../../../actions/interfaces';
import {handleLoadingCurrentEvent, handlePostEvent, handlePutEvent, flushEvent, handleLoadingEvents} from '../../../actions/events';
import EventCreate from './EventCreate';

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingCurrentEvent: bindActionCreators(handleLoadingCurrentEvent, dispatch),
        handlePostEvent: bindActionCreators(handlePostEvent, dispatch),
        handlePutEvent: bindActionCreators(handlePutEvent, dispatch),
        flushEvent: bindActionCreators(flushEvent, dispatch),
        handleLoadingEvents: bindActionCreators(handleLoadingEvents, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCreate);
