import React from 'react';
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodoList } from "../redux/slectors"
import AddTodo from './AddTodo';
const ListTodo = props => {
    console.log('renderList: ', props);
    return (
        <div>

            <div className="center" style={{ margin: 20 }}>
                <button className="blue waves-effect waves-light btn" style={{ margin: 5 }}>All todos</button>
                <button className="green waves-effect waves-light btn" style={{ margin: 5 }}><i className="material-icons center">done_all</i></button>
                <button className="orange waves-effect waves-light btn" style={{ margin: 5 }}><i className="material-icons center">error</i></button>
            </div>
            <div className="collection">
                {
                    props.list && props.list.length ?
                        props.list.map((x) => {
                            return <TodoItem key={x.id} item={x} />;
                        }) :
                        "No todo's YAY!"}
            </div>
        </div>);
}

const mapStateToProps = state => {
    const list = getTodoList(state);
    console.log("Ma list: ", list);
    return { list: list };
};

export default connect(mapStateToProps)(ListTodo);