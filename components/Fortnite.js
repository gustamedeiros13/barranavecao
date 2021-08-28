import * as React from 'react';

import {Text, View, Image , StyleSheet} from 'react-native';

export default function Fortnite (){
  return (
<View style={estilo.container}>
<Image style={estilo.img} source={{uri:'https://image.api.playstation.com/vulcan/img/rnd/202106/0806/7KJILbdp9AEmmrELwJCMJqc2.png?w=440'}}/>
<Text style={estilo.titulo}> Fortnite - Jogo para computador </Text>

</View>
    
  );

}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F4F4F',
  },
titulo: {
fontSize:20,
color: '#00FA9A',
alignItems: 'center',
justifyContent: 'center',
textAlign:'center',
},
img:{
  height: 300,
  width: 250,
}

});
