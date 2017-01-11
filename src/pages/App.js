import React from 'react';
import { Component } from 'react';

import {indigo700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
      primary1Color: indigo700
    }
});

class App extends Component {
  render() {
    return (
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            {this.props.children}
          </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
