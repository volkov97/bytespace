import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPageTitle} from '../../../actions/interfaces';
import {handleLoadingEvents, handleDeleteEvents} from '../../../actions/events';
import EventsList from './EventsList';

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingEvents: bindActionCreators(handleLoadingEvents, dispatch),
        handleDeleteEvents: bindActionCreators(handleDeleteEvents, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
