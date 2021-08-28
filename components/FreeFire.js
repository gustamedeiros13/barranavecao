import * as React from 'react';

import {Text, View, Image , StyleSheet} from 'react-native';

export default function FreeFire (){
  return (
<View style={estilo.container}>
<Image style={estilo.img} source={{uri:'https://maistim.com.br/blog/app/uploads/2020/11/63tim-freefire.jpg'}}/>
<Text style={estilo.titulo}> Free Fire - Jogo para celular </Text>

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
