import React from 'react';

export default class Counter extends React.Component {
    render () {
        return (
            <div className="counter">
                <div>All: {this.props.countAll}</div>
                <div>Viewed: {this.props.countSeen}</div>
            </div>
        )
    }
}
