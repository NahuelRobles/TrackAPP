import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  Calendar,
  ButtonPlus,
  ProyectList,
  AddProject,
} from '../../components/common';
import RBSheet from 'react-native-raw-bottom-sheet';

import {connect} from 'react-redux';
import {actors} from '../../redux/reducers/user';
import moment from 'moment';

class HomeScreen extends Component {
  state = {
    Month: '',
    Year: '',
    Day: '',
  };

  componentDidMount() {
    const dateinit = moment().format('L');
    const Date = dateinit.split('/');
    this.setState({Month: Date[0], Day: Date[1], Year: Date[2]});
  }

  async getResponse(result) {
    this.state.Date = result;
    const Date = await this.state.Date.split('-');
    this.setState({Month: Date[0], Day: Date[1], Year: Date[2]});
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Calendar callback={this.getResponse.bind(this)} />
        <ProyectList Day={this.state.Day} Month={this.state.Month} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.RBSheet.open()}
          style={styles.touchableOpacityStyle}>
          <ButtonPlus style={styles.floatingButtonStyle} />
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={300}
            duration={250}
            customStyles={{
              container: {
                //justifyContent: "center",
                //alignItems: "center"
              },
            }}>
            <AddProject
              Day={this.state.Day}
              Month={this.state.Month}
              onPress={() => this.RBSheet.close()}
            />
          </RBSheet>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    right: 1,
    bottom: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
  },

  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
};

export default connect(
  null,
  null,
)(HomeScreen);
