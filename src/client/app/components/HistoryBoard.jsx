import React, { Component } from 'react';
import {Link} from "react-router";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import "../styles/historyStyle.css";

import moment from "moment";
import TooltipOnButton from "./TooltipOnButton";
import PlayBoard from "./PlayBoard";

let isTooltipShow = {};

const columns = [{
    header: 'History Table',
    columns : [
    {
        header : "Date",
        accessor : "time",
        render : row => moment(row.value).format("HH:mm DD/MM/YYYY")
    },
    {
        header : "Winner",
        accessor : "winner"        
    },
    {
        header : "Show Game Board",
        accessor : "board",
        render : row => {
            console.log(row);
            let tooltipId = `game${row.row.time}`;
            return (
                <TooltipOnButton id = {tooltipId} buttonMessage = "Hover Me">
                    <PlayBoard key = {`tooltip${tooltipId}`} playBoard = {row.row.board}/>
                </TooltipOnButton>
            );
    }
    }]
}];

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
                
                <ReactTable
                    data={this.props.games}
                    columns={columns}
                    defaultPageSize={20}
                />
            </div>
        );
    }
}

export default HistoryBoard;