import React from 'react';
import { useTodoStore } from '../../types/Todo';
import styled from 'styled-components';

const TodoDiv = styled.div`
  border: 1px solid blue;
  margin-top: 15px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoText = styled.p<{ checked: boolean }>`
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  color: ${({ checked }) => (checked ? 'gray' : 'black')};
`;

const TodoButton = styled.button`
  margin-right: 5px;
  border: none;
  background-color: transparent;
`;

export default function TodoList() {
  const { todos, checkTodo, removeTodo } = useTodoStore();
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoDiv key={index}>
          <TodoText checked={todo.checked}>{todo.text}</TodoText>
          <div>
            <TodoButton onClick={() => checkTodo(index)}>{todo.checked ? '✅' : '☑️'}</TodoButton>
            <TodoButton onClick={() => removeTodo(index)}>❌</TodoButton>
          </div>
        </TodoDiv>
      ))}
    </div>
  );
}
