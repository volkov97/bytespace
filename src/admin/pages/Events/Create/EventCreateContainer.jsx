import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPageTitle} from '../../../actions/interfaces';
import EventCreate from './EventCreate';

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPageTitle: bindActionCreators(setPageTitle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCreate);
