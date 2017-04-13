import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';

class TooltipOnButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isTooltipActive: false
        };
    }
    showTooltip() {
        this.setState({isTooltipActive: true})
    }
    hideTooltip() {
        this.setState({isTooltipActive: false})
    }
    render() {
        return (
            <div>
                <button id={this.props.id} onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>
                    {this.props.buttonMessage}
                </button>
                <ToolTip active={this.state.isTooltipActive} position="right" arrow="center" parent={`#${this.props.id}`}>
                    {this.props.children}
                </ToolTip>
            </div>
        );
    }
}

export default TooltipOnButton;
