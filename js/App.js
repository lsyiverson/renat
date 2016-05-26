'use strict';

import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, ListView} from 'react-native';
import {connect} from 'react-redux';
import NavBar from './components/NavBar';
import UserCard from './components/UserCard';
import {userListAction} from './actions/userListAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  }
});

const mockUserList = [
  {
    "name": "詹岑岑",
    "office": "武汉",
    "title": "HR",
    "photo": "http://7xr6pw.com1.z0.glb.clouddn.com/5fb969f7e4354c92bb0276199754de38.png",
    "created_at": "2016-03-04 15:38:48",
    "id": 151,
    "project": "Wuhan HR",
    "avatar": "http://7xr6pw.com1.z0.glb.clouddn.com/76cb804727c9596df57dbaddd41c3599.png",
    "onboard": "2014-12-04",
    "email": "cczhan@thoughtworks.com"
  },
  {
    "name": "卢来金",
    "office": "北京",
    "title": "Dev",
    "photo": "http://7xr6pw.com1.z0.glb.clouddn.com/f9885c0f83ed4420b44f61421f04e664.png",
    "created_at": "2016-03-04 15:57:00",
    "id": 152,
    "project": "PwC",
    "avatar": "http://7xr6pw.com1.z0.glb.clouddn.com/e877be36603353167125fa37060ea80f.png",
    "onboard": "2015-07-06",
    "email": "ljlu@thoughtworks.com"
  }
];

class App extends Component {
  constructor() {
    super();
    StatusBar.setBarStyle('light-content');
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
  }

  componentWillMount() {
    this.props.fetchUser();
  }
  
  render() {
    const ds = this.dataSource.cloneWithRows(this.props.userList);
    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
          dataSource={ds}
          renderRow={user => <UserCard user={user}/>}/>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    userList: state
  }
}

function mapDispatch(dispatch) {
  return {
    fetchUser: ()=> dispatch(userListAction())
  }
}

export default connect(mapStateToProps, mapDispatch)(App);