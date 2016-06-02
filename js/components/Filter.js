import React from 'react';
import {TextInput, AlertIOS, StyleSheet} from 'react-native';

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: ''
    };
  }

  render() {
    return (
      <TextInput
        style={styles.filter}
        onChangeText={(text) => this.setState({filter: text})}
        onEndEditing={(event) => this.props.action(event.nativeEvent.text)}
        value={this.state.filter}/>
    )
  }
}

const styles = StyleSheet.create({
  filter: {
    marginHorizontal: 7,
    marginVertical: 3,
    borderRadius: 3,
    height: 32,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default Filter;