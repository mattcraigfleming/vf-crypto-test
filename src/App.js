import React, { Component } from 'react';
import Routes from 'routes';
import styled from 'styled-components';
import AppHeader from 'components/AppHeader';

const Wrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  display: flex;
  height: 100%;
  flex-direction: column;

`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <AppHeader />
        <Routes />
      </Wrapper>
    );
  }
}

export default App;
