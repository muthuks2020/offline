import React from 'react';
import { View, Text } from 'react-native';

import { NetworkContext } from './NetworkProvider';

export class ExampleComponent extends React.PureComponent {
  static contextType = NetworkContext;

  render() {
    return (
      <View>
        <Text>You are now {this.context.isConnected ? 'online' : 'offline'}</Text>
      </View>
    );
  }
}
