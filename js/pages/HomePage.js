'use strict';

import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, ListView} from 'react-native';
import {connect} from 'react-redux';
import FilterPanel from '../components/Filter';
import NavBar from '../components/NavBar';
import UserCard from '../components/UserCard';
import {userListAction, userFilterAction} from '../actions/userListAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  }
});

class HomePage extends Component {
  constructor() {
    super();
    StatusBar.setBarStyle('light-content');
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
  }

  componentWillMount() {
    this.props.fetchUser();
  }
  
  render() {
    const {userList, filter, filterUser, navigator} = this.props;

    console.log(userList);
    const data = filter === '' ? userList : userList.filter((user)=> {
      return user.office == filter;
    });

    const ds = this.dataSource.cloneWithRows(data);
    return (
      <View style={styles.container}>
        <NavBar />
        <FilterPanel action={filterUser} />
        <ListView
          enableEmptySections
          dataSource={ds}
          renderRow={user => <UserCard navigator={navigator} user={user}/>}/>
      </View>
    )
  }
}

HomePage.propTypes = {
  navigator: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    userList: state.userList,
    filter: state.filter
  }
}

function mapDispatch(dispatch) {
  return {
    fetchUser: ()=> dispatch(userListAction()),
    filterUser: filter=> dispatch(userFilterAction(filter))
  }
}

export default connect(mapStateToProps, mapDispatch)(HomePage);