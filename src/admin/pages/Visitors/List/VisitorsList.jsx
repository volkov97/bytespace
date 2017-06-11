import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetTable from '../../../components/widgets/Table/Table';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import config from '../../../../core/config/general.config';

export default class VisitorsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            eventId: this.props.params.event_id ? this.props.params.event_id : 0,
            block: {
                actions: {
                    delete: config.server + '/dashboard/visitors/delete'
                }
            }
        };
    }

    componentWillMount() {
        this.props.setPageTitle('Список посетителей');
        !this.props.events.data.length ? this.props.handleLoadingEvents() : false;
    }

    render() {
        const visitors = this.props.events.data.length ? this.props.events.data.filter(_ => _._id === this.state.eventId )[0].visitors : [];
        const tableFields = [
            'Название',
            'Билеты',
            'Дата проведения',
            'Статус',
        ];
        const tableData = visitors.map(_ => {
            return {
                id: _._id,
                actions: [
                    {
                        name: 'Изменить',
                        link: `/dashboard/events/update?id=${_._id}`
                    },
                    {
                        name: 'Посетители',
                        link: `/dashboard/events/${_._id}/visitors`
                    }
                ],
                cells: [
                    _.title,
                    `${_.tickets - _.visitors}/${_.tickets}`,
                    _.date,
                    _.publishStatus ? 'Активен' : 'Неактивен'
                ]
            }
        });
        return (
            <div className="VisitorsList">
                <Block title="Список посетителей" showButtons buttons={this.state.block.buttons}>
                    {!this.props.events.isLoading
                        ? <WidgetTable rows={tableData} delete={this.props.handleDeleteEvents}
                                       fields={tableFields} actions={this.state.block.actions}/>
                        : <Loader/>
                    }
                </Block>
            </div>
        )
    }

}
