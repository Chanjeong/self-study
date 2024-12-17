import React from 'react';
import Header from '../Header/Header';
import TodoContainer from '../TodoContainer/TodoContainer';
import { useTodoStore } from '../../types/Todo';

export default function Main() {
  const { checkAll, removeAll } = useTodoStore();
  return (
    <div>
      <Header />
      <button onClick={() => checkAll()}>전체 선택</button>
      <button onClick={() => removeAll()}>전체 삭제</button>
      <TodoContainer />
    </div>
  );
}
