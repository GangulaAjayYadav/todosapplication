import './index.css'

const TodoItem = ({
  todo,
  editIndex,
  editText,
  onDelete,
  onEdit,
  onSave,
  onEditChange,
  onComplete,
}) => {
  const {title, completed, id} = todo

  return (
    <li className="todo-item">
      <input type="checkbox" checked={completed} onChange={onComplete} />
      {editIndex === id ? (
        <>
          <input type="text" value={editText} onChange={onEditChange} />
          <button onClick={onSave} type="button">
            Save
          </button>
        </>
      ) : (
        <>
          <p className={completed ? 'completed' : ''}>{title}</p>
          <button onClick={onEdit} type="button">
            Edit
          </button>
          <button onClick={onDelete} type="button">
            Delete
          </button>
        </>
      )}
    </li>
  )
}

export default TodoItem
