import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" }
    }
    handleChange(input) {
        this.setState({ input });
    }

    handleAddTodo = () => {
        console.log("les props :", this.props);
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
    }
    render() {
        return (
            <>
                <input onChange={e => this.handleChange(e.target.value)} value={this.state.input} />
                <div className="center">
                    <button className=" btn" onClick={this.handleAddTodo}>ADD TODO</button>
                </div>
            </>
        );
    }
}
export default connect(
    null,
    { addTodo }
)(AddTodo);