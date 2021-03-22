
import React from 'react';
import {View,Text, Button} from 'react-native';
import {Increment, Decrement} from './Store/action'
import {connect} from 'react-redux'

class Buttons extends React.Component{
  render(){
    return(
      <View>
        <Button title="Increment" onPress={this.props.incre}></Button>
        <Button color='red' title="Decrement" onPress={this.props.decre}></Button>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    incre: () => dispatch(Increment()),
    decre: () => dispatch(Decrement())
  }
}

export default connect(undefined,mapDispatchToProps)(Buttons);

/*
As a first argument connect expects to get a mapStateToProps function. So you need to explicitly pass an undefined instead of it.

export default connect(undefined, MapDispatchToProps)(SearchBar);
*/