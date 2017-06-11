import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleLoadingEvents} from '../../actions/events';
import Home from './Home';

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingEvents: bindActionCreators(handleLoadingEvents, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
