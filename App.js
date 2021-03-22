import React from 'react';
import {View,Text} from 'react-native';
import Display from './Display'
import Buttons from './Buttons'
import {connect} from 'react-redux'

import {Provider} from 'react-redux'; 
import configureStore from './Store/configurationStore'

const store = configureStore()


class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Display />
        <Buttons /> 
        <Text>{this.props.count}</Text>
      </Provider>
    )
  }
}

// const mapStateToProps=state=>{
//   return{
//       count: state.counting.count
//   }
// }

// export default connect(mapStateToProps)(App);

export default App;