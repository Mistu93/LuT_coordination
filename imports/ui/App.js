import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import {PlayersDb} from '../api/playersDb.js'
import Player from './Player.js'

class App extends Component{
    getPlayers() {
        return [
            {_id: 1, name: 'Mistunno'},
            {_id: 2, name: 'albatros'}
        ]
    }

    renderPlayers(){
        return this.props.players.map((player) => (
            <Player key={player._id} player={player}/>
        ));
    }

    render(){
        return (
            <div className="container" >
                <h1> Player List</h1>

                <ul>
                    {this.renderPlayers()}
                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        players: PlayersDb.find({}).fetch(),
    }
})(App);