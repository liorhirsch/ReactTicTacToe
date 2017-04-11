import React from "react";
import "../styles/ResetButton.css";

class ResetButton extends React.Component {
    render() {
        return (
            <div>
                <button className = "reset-button" onClick = {this.props.handleReset}>
                    Reset Game
                </button>
            </div>
        );
    }
}

export default ResetButton;