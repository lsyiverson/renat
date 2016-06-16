'use strict';

import React, {Component} from "react";
import {TouchableHighlight, Text, StyleSheet, View} from "react-native";

class DetailPage extends Component {
  render() {
    const {navigator} = this.props;
    return (
      <View style={styles.page}>
        <TouchableHighlight onPress={()=> {
      console.log('onPress');
      navigator.pop();
      }}>
          <Text>Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40
  }
});

export default DetailPage;