'use strict';

import React, {Component} from "react";
import {Navigator} from "react-native";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Navigator
      initialRoute={{id: 'home'}}
      renderScene={(route, navigator) => {
      switch(route.id){
        case 'home':
          return <HomePage navigator={navigator}/>;
        case 'detail':
          return <DetailPage navigator={navigator}/>;
        default:
          return <HomePage />;
      }
      }
      }
    />
  )
}

export default App;