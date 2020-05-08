import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {
  Card,
  CardSection,
  Button,
  Input,
  TraslateText,
} from '../../components/common';

import {connect} from 'react-redux';
import {actors} from '../../redux/reducers/user';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {}

  SignIn() {
    const { loginfuntion} = this.props;
    loginfuntion(this.state.email, this.state.password);
    //this.props.navigation.navigate('Home');
  }

  ForgotPassword() {}

  render() {
    return (
      <SafeAreaView>
        <View>
          <Card>
            <CardSection>
              <Input
                placeholders="user@gmail.com"
                label="Email"
                value={this.state.email}
                onChangeText={email => this.setState({email})}
              />
            </CardSection>
            <CardSection>
              <Input
                secureTextEntry
                placeholders="*********"
                label={TraslateText('password')}
                value={this.state.password}
                onChangeText={password => this.setState({password})}
              />
            </CardSection>

            <CardSection>
              <Button onPress={() => this.SignIn()}>
                {TraslateText('signin')}
              </Button>
              <Button onPress={() => this.ForgotPassword()}>
                {TraslateText('forgotpassword')}
              </Button>
            </CardSection>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {};

const mapToDispatch = dispatch => ({
  loginfuntion: (email,password) =>
  dispatch({ ...actors.LoginSuccess, email, password }),
  
});

export default connect(
  null,
  mapToDispatch,
)(LoginScreen);
