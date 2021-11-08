import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss'
import { toast } from 'react-toastify';
class ListToDo extends React.Component {
    state = {
        listTodos: [
            { id: 'id1', title: 'to do 1' },
            { id: 'id2', title: 'to do 2' },
            { id: 'id3', title: 'to do 3' }
        ]
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Added new todo!");
    }
    render() {
        let { listTodos } = this.state;
        return (
            <>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        <span>{index + 1} - {item.title}</span>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default ListToDo;