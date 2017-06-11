import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetTable from '../../../components/widgets/Table/Table';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import config from '../../../../core/config/general.config';

export default class VisitorsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            block: {
                actions: {
                    delete: config.server + '/dashboard/visitors/delete'
                }
            }
        };
    }

    componentWillMount() {
        this.props.setPageTitle('Список посетителей');
        // !this.props.events.tableData.length ? this.props.handleLoadingEvents() : null;
    }

    render() {
        return (
            <div className="VisitorsList">
                <Block title="Список посетителей" showButtons buttons={this.state.block.buttons}>
                    {!this.props.events.isLoading
                        ? <WidgetTable rows={this.props.events.tableData} delete={this.props.handleDeleteEvents}
                                       fields={this.props.events.tableFields} actions={this.state.block.actions}/>
                        : <Loader/>
                    }
                </Block>
            </div>
        )
    }

}
