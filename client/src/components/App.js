import React, { Component } from 'react';
import _ from 'lodash';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styled-components/themes/basic';
import Navbar from './Navbar/Navbar';
import Body from './Body/Body';

class App extends Component {
  state = {
    change: false
  };
  componentDidMount() {
    const container = document.getElementById('MainContainer');
    container.addEventListener(
      'scroll',
      _.throttle(this.handleScroll, 1, { trailing: true, leading: true })
    );
  }

  componentWillUnmount() {
    const container = document.getElementById('MainContainer');
    container.removeEventListener(
      'scroll',
      _.throttle(this.handleScroll, 1, { trailing: true, leading: true })
    );
  }

  handleScroll = event => {
    const { change } = this.state;
    const container = document.getElementById('MainContainer');
    const top =
      (container.pageYOffset || container.scrollTop) -
      (container.clientTop || 0);
    if (top > 60 && !change) {
      this.setState({ change: true });
    }
    if (top <= 60 && change) {
      this.setState({ change: false });
    }
  };

  render() {
    const { change } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div onScroll={() => this.handleScroll()}>
          <Navbar change={change} />
          <Body />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
