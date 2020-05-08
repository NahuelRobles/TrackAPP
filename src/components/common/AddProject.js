import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TraslateText} from './LangeManager';
import RNPickerSelect from 'react-native-picker-select';
import {TimePicker} from '../common/Timepicker';

import {connect} from 'react-redux';
import {actors} from '../../redux/reducers/user';

class AddProject extends Component {
  state = {
    selectedValue: '',
    descriptionP: `${TraslateText('descriptionP')}`,
    selectedTime: '',
    projectID: '',
  };

  componentDidMount() {}
  getResponse(result) {
    this.setState({selectedTime: result});
  }

  onPressAdd() {
    console.log('Project:', this.state.projectID);
    console.log('Description', this.state.descriptionText);
    console.log('Time', this.state.selectedTime);
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text style={styles.textTitleStyle}>
              {TraslateText('newtime')} {this.props.Day}/{this.props.Month}
            </Text>
          </View>
          <View style={styles.containerProjectViewContainerProjectView}>
            <Text style={styles.textProjectTitleStyle}>
              {TraslateText('selectproject')}
            </Text>
            <RNPickerSelect
              onValueChange={value => this.setState({projectID: value})}
              items={[
                {label: 'Projectx', value: 'Projectx'},
                {label: 'Projectxx', value: 'Projectxx'},
                {label: 'Projectxxx', value: 'Projectxxx'},
              ]}
              useNativeAndroidPickerStyle={false}
              style={pickerStyle}
            />
            <Text style={styles.separatorStyle} />
          </View>
          <View>
            <Text>{TraslateText('description')}</Text>
            <TextInput
              value={this.state.descriptionP}
              onChangeText={text => {
                this.setState({descriptionP: text});
              }}
              style={styles.inputTextProjectStyle}
            />
            <TimePicker callback={value => this.getResponse(value)} />
          </View>
          <View style={styles.containerActionStyle}>
            <TouchableOpacity
              onPress={() => this.onPressAdd()}
              style={styles.addActionStyle}>
              <Text style={styles.actionColorStyle}>
                {TraslateText('addaction')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.onPress()}
              style={styles.cancelActionStyle}>
              <Text style={styles.actionColorStyle}>
                {TraslateText('cancelaction')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    margin: 20,
  },
  textTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  containerProjectView: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 8,
  },
  textProjectTitleStyle: {
    marginBottom: 4,
  },
  inputTextProjectStyle: {
    color:'black',
    height: Math.max(35, 20),
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginTop: -5,
  },
  containerActionStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: 10,
  },
  addActionStyle: {
    height: 50,
    width: 75,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 5,
  },
  cancelActionStyle: {
    height: 50,
    width: 75,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  actionColorStyle: {
    color: 'white',
  },
  separatorStyle: {
    marginTop: -5,
  },
};

const pickerStyle = {
  inputIOS: {
    color: 'black',
    fontSize: 15,
  },
  inputAndroidContainer: {
    marginTop: -10,
    marginBottom: -20,
    marginLeft: -5
  },
  inputAndroid: {
    color: 'black',
    fontSize: 15,
  
  },
};

export {AddProject};
