import React from 'react';

export class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: "yo",
    }

    activateEditMode() {
        this.setState({
            editMode: true,
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status}</span>
                </div>}

                {this.state.editMode &&
                <div>
                    <input onBlur={this.deActivateEditMode.bind(this)} autoFocus value={this.props.status}/>
                </div>}
            </div>
        );
    }

}

