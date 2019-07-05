import React from 'react';

import { NetworkProvider } from './NetworkProvider';
import { ExampleComponent } from './ExampleComponent';

export default class App extends React.PureComponent {
  render() {
    return (
      <NetworkProvider>
        <ExampleComponent />
      </NetworkProvider>
    );
  }
}
