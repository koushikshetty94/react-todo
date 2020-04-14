import React, { useRef } from 'react';



class Todo extends React.Component {
    // let newTodo = useRef(null);

    constructor() {
        super()
        this.state = {
            todos: [],
            id: 1
        }
    }


    handleChange = (e) => {

        if (e.keyCode == 13) {
            let todo = { Completed: false, title: e.target.value, id: this.state.id++ }
            this.setState({ todos: this.state.todos.concat(todo), id: this.state.id++ })
        }

    }
    render() {
        console.log(this.state.todos)

        return (
            <div className="container">
                <input onKeyUp={this.handleChange} class="form-control form-control-sm container-md	" type="text" placeholder="todo"></input>
            {
                this.state.todos.map(todo => <p>{todo.title}</p>)
            }
            </div>
            
        )

    }

}
export default Todo;