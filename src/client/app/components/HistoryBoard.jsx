import React, { Component } from 'react';
import {Link} from "react-router";


class HistoryBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : props.params.name
        }
    }
    render() {
        return (
            <div>
                <h1>{`History Board Of ${this.state.name}`}</h1>
                <Link to = "/">Main</Link>
            </div>
        );
    }
}

export default HistoryBoard;