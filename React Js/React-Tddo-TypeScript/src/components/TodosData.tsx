import { useTodos } from "../store/ToDo";

const TodosData = () => {
  const { todos,todoCheckToggle,handleDelete } = useTodos();
  let filteredData = todos;
  return (
    <ul>
      {filteredData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => todoCheckToggle(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && <button type="button" onClick={() => handleDelete(todo.id)}>Delete</button>}
          </li>
        );
      })}
    </ul>
  );
};

export default TodosData;
