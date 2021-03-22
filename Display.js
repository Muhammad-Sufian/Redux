
import React from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux'

class Display extends React.Component{
  render(){
    return(
      <View>
        <Text style={{fontSize:40}}>Output:</Text>
        <Text style={{fontSize:40}}>{this.props.count}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
    return{
        count: state.counting.count
    }
}

export default connect(mapStateToProps)(Display);