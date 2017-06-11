import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPageTitle} from '../../../actions/interfaces';
import {handleLoadingEvents} from '../../../actions/events';
import VisitorsList from './VisitorsList';

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingEvents: bindActionCreators(handleLoadingEvents, dispatch),
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VisitorsList);
