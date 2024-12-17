import { create } from 'zustand';

export interface Todo {
  text: string;
  checked: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  checkTodo: (index: number) => void;
  removeTodo: (index: number) => void;
  checkAll: () => void;
  removeAll: () => void;
}

const LOCAL_STORAGE_KEY = 'todo_store';

const loadTodo = (): Todo[] => {
  const storedTodo = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTodo ? JSON.parse(storedTodo) : [];
};

export const useTodoStore = create<TodoStore>(set => ({
  todos: loadTodo(),
  addTodo: text =>
    set(state => {
      const updatedTodos = [...state.todos, { text, checked: false }];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  checkTodo: index =>
    set(state => {
      const updatedTodos = state.todos.map((todo, i) => (i === index ? { ...todo, checked: !todo.checked } : todo));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  removeTodo: index =>
    set(state => {
      const updatedTodos = state.todos.filter((_, i) => i !== index);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  checkAll: () =>
    set(state => {
      const allChecked = state.todos.every(todo => todo.checked);
      const updatedTodos = state.todos.map(todo => ({ ...todo, checked: !allChecked }));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
      return { todos: updatedTodos };
    }),
  removeAll: () =>
    set(() => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return { todos: [] };
    })
}));
