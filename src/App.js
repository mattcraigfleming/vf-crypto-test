import React, { Component } from 'react';
import Routes from 'routes';
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset'
import Header from 'components/Header';
import Provider from 'store/Provider';

const Wrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  display: flex;
  height: 100%;
  flex-direction: column;

`

const baseStyles = () => injectGlobal`
    ${reset}  
    html, body, #root {
      height: 100%;
    }

`


class App extends Component {
  render() {
    baseStyles()
    return (
      <Provider>
        <Router>
          <Wrapper>
            <Header />
            <Routes />
          </Wrapper>
        </Router>
      </Provider>
    );
  }
}

export default App;
