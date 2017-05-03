import React from 'react';

import dictionary from './Index.words';

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