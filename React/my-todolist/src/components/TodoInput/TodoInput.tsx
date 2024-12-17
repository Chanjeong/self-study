import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useTodoStore } from '../../types/Todo';

const TodoWrapper = styled.div`
  display: flex;
`;
const Todo = styled.input`
  padding: 10px;
  width: 100%;
`;

const Save = styled.button`
  white-space: nowrap;
`;

export default function TodoInput() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodoStore();

  const saveTodo = () => {
    if (todo === '') {
      alert('값을 입력하세요');
      return;
    } else {
      addTodo(todo);
      setTodo('');
    }
  };

  const submitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitTodo}>
      <TodoWrapper>
        <Todo
          type="text"
          name="todo"
          placeholder="오늘의 할일을 적어보세요"
          value={todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
        />
        <Save type="submit" onClick={saveTodo}>
          저장
        </Save>
      </TodoWrapper>
    </form>
  );
}
