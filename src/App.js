import React, { Component } from "react";
import Todos from "./components/Todos";
import todosData from "./todosData";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <Todos
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        />)

        return (
            <div div className="todo-list">
                <Header/>
                <MainContent/>
                {todoItems}
                <Footer/>
            </div>
        )
    }

}

export default App