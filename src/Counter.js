import React from 'react';

export default class Counter extends React.Component {
    render () {
        return (
            <div>
                <div>All: {this.props.countAll}</div>
                <div>Viewed: {this.props.countAll}</div>
            </div>
        )
    }
}
