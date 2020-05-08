import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ButtonPlus extends Component {
  render() {
    return (
      <View>
        <Icon name="plus-circle" size={50} color="#f44336" />
      </View>
    );
  }
}

export {ButtonPlus};
