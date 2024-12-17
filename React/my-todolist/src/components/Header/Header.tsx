import React from 'react';
import TodoInput from '../TodoInput/TodoInput';

export default function Header() {
  return (
    <div>
      <h1>TodoList</h1>
      <p>여러분의 할일을 정리하여 계획된 하루를 실행해 나가보세요!</p>
      <TodoInput />
    </div>
  );
}
