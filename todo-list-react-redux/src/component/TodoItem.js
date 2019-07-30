
import React, { Component } from "react";
import { connect } from "react-redux";
import { doneTodo } from "../redux/actions"

const TodoItem = ({ item, doneTodo }) => (

    <div className="collection-item">
        {item.done ?
            <h4 style={{ textDecoration: "line-through" }}>
                <span className="red btn-floating ">
                    <i className="material-icons">alarm_off</i>
                </span> {item.content}
            </h4> :
            <h4>
                <span className="green btn-floating pulse">
                    <i className="material-icons">alarm_add</i>
                </span> {item.content}
                <button className=" green btn secondary-content" onClick={() => doneTodo(item.id)}><i className="material-icons">done</i></button>
            </h4>
        }
    </div >);


export default connect(null, { doneTodo })(TodoItem);