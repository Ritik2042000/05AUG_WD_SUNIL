import { FormEvent, useState } from "react";
import { useTodos } from "../store/ToDo";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo !== "") {
      handleAddToDo(todo);
    }
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddToDo;