import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodo extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Book the ticket for today evening',
        completed: false,
      },
      {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
        completed: false,
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
        completed: false,
      },
      {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
        completed: false,
      },
      {
        id: 5,
        title: 'Order fruits on Big Basket',
        completed: false,
      },
      {
        id: 6,
        title: 'Fix the production issue',
        completed: false,
      },
      {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
        completed: false,
      },
      {
        id: 8,
        title: 'Get essentials for Sunday car wash',
        completed: false,
      },
    ],
    newTodo: '',
    editIndex: null,
    editText: '',
    newTodoCount: 1,
  }

  handleInputChange = e => {
    this.setState({newTodo: e.target.value})
  }

  addTodo = () => {
    const {newTodo, todos} = this.state
    const [title, count] = newTodo.split(' ')
    const numberOfTodos = parseInt(count, 10) || 1
    const newTodos = Array.from({length: numberOfTodos}, (_, index) => ({
      id: Date.now() + index,
      title,
      completed: false,
    }))

    this.setState({todos: [...todos, ...newTodos], newTodo: ''})
  }

  handleEditChange = e => {
    this.setState({editText: e.target.value})
  }

  saveEdit = id => {
    const {todos, editText} = this.state
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, title: editText} : todo,
    )
    this.setState({todos: updatedTodos, editIndex: null, editText: ''})
  }

  toggleComplete = id => {
    const {todos} = this.state
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todos: updatedTodos})
  }

  deleteTodo = id => {
    const {todos} = this.state
    const updatedTodos = todos.filter(todo => todo.id !== id)
    this.setState({todos: updatedTodos})
  }

  render() {
    const {todos, newTodo, editIndex, editText, newTodoCount} = this.state

    return (
      <div className="simple-todo-container">
        <h1 className="heading">Simple Todos</h1>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={this.handleInputChange}
            placeholder="Enter todo title and count"
          />
          <input
            type="number"
            value={newTodoCount}
            onChange={this.handleInputChange}
            placeholder="Enter number of todos"
          />
          <button onClick={this.addTodo} type="button">
            Add
          </button>
        </div>
        <ul className="todos-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editIndex={editIndex}
              editText={editText}
              onDelete={() => this.deleteTodo(todo.id)}
              onEdit={() =>
                this.setState({editIndex: todo.id, editText: todo.title})
              }
              onSave={() => this.saveEdit(todo.id)}
              onEditChange={this.handleEditChange}
              onComplete={() => this.toggleComplete(todo.id)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodo
