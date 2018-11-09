import React, {Component} from 'react';

export default  class Player extends Component{
    render() {
        return (
            <li>{this.props.player.name}</li>
        )
    }
}