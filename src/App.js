import React, { Component } from 'react';
import Routes from 'routes';

import AppHeader from 'components/AppHeader';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Routes />
      </div>
    );
  }
}

export default App;
