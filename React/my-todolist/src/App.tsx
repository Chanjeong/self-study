import React from 'react';
import Main from './components/Main/Main';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Div>
      <Main />
    </Div>
  );
}

export default App;
