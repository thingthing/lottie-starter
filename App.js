import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

import anim from './animation.json';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Lottie
          ref={animation => {
            if (animation) {
              animation.play();
            }
          }}
          loop
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: '#0A46B9',
          }}
          source={anim}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
