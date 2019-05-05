import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('go to line chart!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="food"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Clothing"
            color='red'
          />
        </View>
                <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Electricity"
            color='green'
          />
        </View>
      </View>
    );
  }
}
        <View style={{width: 10, height: 10}} />

const styles = StyleSheet.create({
  container: {

   position: 'absolute', top: 15, right: 20,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 0
  },
  alternativeLayoutButtonContainer: {
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
