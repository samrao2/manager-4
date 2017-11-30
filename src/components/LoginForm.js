//we need this component to use react components library
import React, { Component } from 'react';
import { View, Text } from 'react-native';
//this connect helper that will connect the action to the login form
import { connect } from 'react-redux';
//this is an action creator that we need to import in to connect with the reducers
import { emailChanged, passwordChanged, loginUser } from '../actions';
//these are our pre-styled components
import { Card, CardSection, Input, Button, Spinner } from './common';

//login form is declared as an instance of the class "component"
class Loginform extends Component {
// this is the event handler as a method whose argument is text
  onEmailChange(text) {
//we have access to this prop from the action creator that is connected via the connect helper
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
const { email, password } = this.props;
this.props.loginUser({ email, password });
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
   return (
     <Button onPress={this.onButtonPress.bind(this)}>
     Login
     </Button>
   );
  }
  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundcolor: 'White' }}>
         <Text style={styles.errorTextStyle}>
          {this.props.error}
         </Text>
        </View>
      );
    }
  }
  render() {
    return (

    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
//this comes from mapStateToProps and WE tell the component what its value is
//via the action creator and the reducer
          value={this.props.email}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
      </CardSection>

        {this.renderError()}

      <CardSection>
        {this.renderButton()}
      </CardSection>
    </Card>
  );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
//this function is from the react-redux library and helps to map some piece of state
//onto the component
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

//we are connecting/binding our action creator via the connect helper
//mapStateToProps is the first argument in the connect function
export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(Loginform);
