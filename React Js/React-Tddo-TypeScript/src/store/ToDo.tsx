import { createContext, ReactNode, useContext, useState } from "react";

// type decleartion
export type ToDoProviderProps = {
  children: ReactNode;
};

export type ToDo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type ToDOsContext = {
  todos: ToDo[];
  handleAddToDo: (task: string) => void;
  todoCheckToggle: (id: string) => void;
  handleDelete: (id: string) => void;
};

//context api
export const todoContext = createContext<ToDOsContext | null>(null);

export const TodoProvider = ({ children }: ToDoProviderProps) => {
  const [todos, setToDos] = useState<ToDo[]>([]);

  const handleAddToDo = (task: string) => {
    setToDos((prev) => {
      const newTodos: ToDo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newTodos;
    });
  };

  // toggleCheckBoxTodos

  const todoCheckToggle = (id: string) => {
    setToDos((prev) => {
      let newTodos = prev.map((data) => {
        if (data.id === id) {
          return { ...data, completed: !data.completed };
        } else {
          return data;
        }
      });
      return newTodos;
    });
  };

  // delete the todo completed task Fnc.

  const handleDelete = (id: string) => {
    setToDos((prev) => {
      let newTodos = prev.filter((data) => 
        data.id !== id
      );
      return newTodos;
    });
  };

  return (
    <todoContext.Provider
      value={{ todos, handleAddToDo, todoCheckToggle, handleDelete }}
    >
      {children}
    </todoContext.Provider>
  );
};

// consumer as function (like useSelector) to get data from the store
export const useTodos = () => {
  const todosConsumer = useContext(todoContext);
  if (!todosConsumer) {
    throw new Error("");
  }
  return todosConsumer;
};
