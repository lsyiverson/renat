'use strict';

import React, {Component} from "react";
import {View, StyleSheet, Image, Text, TouchableHighlight} from "react-native";

export default class UserCard extends Component {
  render() {
    const {user, navigator} = this.props;
    return (
      <TouchableHighlight onPress={()=> {navigator.push({id: 'detail'})}}>
        <View style={[styles.card, styles.shadow]}>
          <Image
            style={styles.avatar}
            source={{uri: user.photo}}
          />
          <View style={styles.textWrapper}>
            <View style={styles.nameAndOffice}>
              <Text style={styles.name}>{user.name}</Text>
              <View style={styles.officeWrapper}>
                <Text style={styles.office}>{user.office}</Text>
              </View>
            </View>
            <Text style={styles.job}>{user.title} on {user.project}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold'
  },
  job: {
    fontSize: 14,
    color: '#666666'
  },
  email: {
    fontSize: 12,
    color: '#999999'
  },
  card: {
    backgroundColor: 'white',
    height: 103,
    marginHorizontal: 7,
    marginVertical: 3,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  textWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 20,
    justifyContent: 'space-between'
  },
  avatar: {
    width: 73,
    height: 73
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2
  },
  nameAndOffice: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  office: {
    backgroundColor: '#F50057',
    color: 'white',
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },
  officeWrapper: {
    marginLeft: 5
  }
});



