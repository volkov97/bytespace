import React from 'react';

import './Index.scss';

export default class Index extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="Index">
                {this.props.children}
            </div>
        );
    }

}