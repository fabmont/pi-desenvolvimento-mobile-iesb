import React, { useState } from 'react';
import {  View,TouchableOpacity,TextInput,Text} from 'react-native';
import Toolbar from '../../components/Toolbar';
import styles from './styles';
import { Avatar } from 'react-native-elements';

export default function EditarPerfil(){
  return (
  
    <View style={styles.screen} >
      <View style={styles.container}>
        <Toolbar>
        <ToolbarBackAction
        onPress={this._goBack}
    />
      <ToolbarContent  title="Editar Perfil"/>
      </Toolbar>
      </View>
<Avatar  
size= {100}

  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  rounded
   source={{
              uri: 'https://randomuser.me/api/portraits/men/79.jpg',}}
  
/><Text style={{ marginTop:10, textAlign: 'center' }}>Alterar foto</Text>

<View style={styles.nomebox}>
      <TextInput
        placeholder="Nome"
        style={styles.TextInput}
        onChangeText={(Text) }
      />
  </View>
<View style={styles.emailbox}>
      <TextInput
        placeholder="E-mail"
        style={styles.TextInput}
         keyboardType={'email-adress'}
       
      />
  </View>
  <View style={styles.idadebox}>
      <TextInput
        placeholder="Idade"
        style={styles.TextInput}
      />
  </View>
  <View style={styles.profissaobox}>
      <TextInput
        placeholder="Profissão"
        style={styles.TextInput}
        onChangeText={(Text)}
      />
  </View>
<View style={styles.biobox}>
      <TextInput
        placeholder="Bio"
        style={styles.TextInput}
        onChangeText={(Text)}
      />
  </View>
  <TouchableOpacity style={styles.alteracaobox} >
        <Text style={{color: '#FFFFFF', textAlign: 'center' }}>SALVAR ALTERAÇÕES</Text>
      </TouchableOpacity>
    </View>
  );
}