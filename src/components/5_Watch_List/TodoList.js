/*
import React, { Component } from 'react'
import * as uuid from "uuid";
import './Todo.css'


class Todo extends Component {

    constructor(props) {
        super(props)

        this.input = React.createRef()
        this.state = {
            list: [],
            isComplete: false
        }
    }

    addTask = () => {

        const Items = {
            id: uuid.v4(),
            value: this.input.current.value,
            isComplete: false,
            Date: new Date().toUTCString()
        };

        if(localStorage.getItem('list') == null){
            const list = []
            list.push(Items);
            localStorage.setItem("list", JSON.stringify(list))
        }
        else{
            const list = JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list", JSON.stringify(list))
        }
        this.setState({
            list: JSON.parse(localStorage.getItem('list'))
        });
    }

   isChecked = ( list ) => {
        let watchList = this.state.isComplete;
        if (watchList == false) {
            localStorage.setItem(list, watchList = true)
        } else {

        }
        localStorage.setItem(list, watchList)
       console.log(this.state.isComplete)
    };

    componentDidMount() {
        const list = window.localStorage.getItem('list');
        const parsedList = JSON.parse(list);
        if(list == null){
            return false
        }
        else{
            this.setState({
                list: parsedList,
            })
            console.log(this.state.list);
        }
    }

    deleteItem = (event) => {

        let index = event.target.getAttribute('data-key')
        let listValue = JSON.parse(localStorage.getItem('list'));
        listValue.splice(index, 1)
        this.setState({list: listValue});
        localStorage.setItem('list', JSON.stringify(listValue))
    }


    render () {
        return (
            <div className="main-container">
                <h1>My watch list</h1>
                <hr/>
                <div className="container">
                    <input type="text" placeholder="Add to watch list" ref={this.input} />
                    <button onClick={this.addTask} className="button">Add</button>
                    <ol>
                        {
                            this.state.list.map((item,index)=>
                            {
                                return(<li key={item.id}> {item.value}
                                    <input name="rememberMe" checked={ this.state.isChecked } onChange={ this.isChecked } type="checkbox" />
                                    <button className="button" type="button" value="delete" data-key={index} onClick={ this.deleteItem }>Delete</button></li>)
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Todo;
*/
import React from 'react';

// COMPONENT
import TodoItem from './TodoItem';

const TodoList = ({ todoItems, onRemoveTodo, onToggleTodoDone, onEditTodo, setCustomError }) => {
    return (
        <ul>
            {
                todoItems && // Check if todoItems exists
                Array.isArray(todoItems) && // Check if it's an array
                todoItems.length > 0 && // The array should not be empty
                todoItems.map(({ id, todo, isDone }) => (
                    <TodoItem
                        key={id}
                        id={id}
                        todo={todo}
                        onRemoveTodo={onRemoveTodo}
                        onToggleTodoDone={onToggleTodoDone}
                        onEditTodo={onEditTodo}
                        isDone={isDone}
                        setCustomError={setCustomError}
                    />
                ))
            }
        </ul>
    )
};

export default React.memo(TodoList);