import * as React from 'react';

import {Text, View, Image , StyleSheet} from 'react-native';

export default function Home (){
  return (
<View style={estilo.container}>
<Text style={estilo.titulo}> Bem vindo, aqui terá dicas de 2 games para celular ou computador! </Text>

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

});
