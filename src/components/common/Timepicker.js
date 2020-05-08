import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity, 
  Platform
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

class TimePicker extends Component {
  state = {
    Hours: [],
    Minute: [],
    Mvalue: -1,
    Hvalue: -1,
    hhP: '',
    mhP: '',
  };
  componentDidMount() {
    this.setStateAsync();
    const {Hours, Minute} = this.state;
    for (var i = 0; i < 25; i++) {
      if (i <= 9) {
        Hours.push({label: `0${i}`, value: `0${i}`});
      } else {
        Hours.push({label: `${i}`, value: `${i}`});
      }
    }
    for (var i = 0; i < 60; i++) {
      if (i <= 9) {
        Minute.push({label: `0${i}`, value: `0${i}`});
      } else {
        Minute.push({label: `${i}`, value: `${i}`});
      }
    }
  }

  async setStateAsync() {
    const {hs, mm} = this.props;
    await this.setState({
      Hvalue: hs,
      Mvalue: mm,
    });
  }

  async hoursValue(dates) {
    const {Mvalue, Hvalue} = this.state;
    if (dates == 'HH') {
      await this.setState({Hvalue: -1});
    } else {
      await this.setState(
        {
          Hvalue: dates,
        },
        () => {
          const Track = dates + ':' + Mvalue;
          this.props.callback(Track);
        },
      );
    }
  }

  async minuteValue(datesM) {
    const {Mvalue, Hvalue} = this.state;
    if (datesM == 'MM') {
      await this.setState({Mvalue: -1});
    } else {
      await this.setState({Mvalue: datesM});
      const Track = Hvalue + ':' + datesM;
      this.props.callback(Track);
    }
  }

  componentDidUpdate() {}

  render() {
    const {Hours, Minute} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <RNPickerSelect
            placeholder={{
              label: 'HH',
              value: 'HH',
            }}
            useNativeAndroidPickerStyle={false}
            value={this.state.Hvalue}
            onValueChange={values => this.hoursValue(values)}
            items={Hours}
            style={pickerStyle}
          />
          <Text style={Platform.OS==="android" ? [styles.separator ,{marginTop: 8} ] : styles.separator}>:</Text>
          <RNPickerSelect
            placeholder={{
              label: 'MM',
              value: 'MM',
            }}
            useNativeAndroidPickerStyle={false}
            value={this.state.Mvalue}
            onValueChange={datesM => this.minuteValue(datesM)}
            items={Minute}
            style={pickerStyle}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const pickerStyle = {
  inputIOS: {
    color: 'black',
    fontSize: 20,
  },
  inputAndroid: {
    color: 'black',
    fontSize: 15,
    marginBottom: -8
  },
};
const styles = {
  separator: {
    fontSize: 20,
    
  },
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
};
export {TimePicker};
