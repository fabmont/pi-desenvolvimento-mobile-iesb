import React from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Avatar, Button, Input, Layout } from '@ui-kitten/components';
import Toolbar from '../../components/Toolbar';
import styles from './styles';

export default function EditarPerfil() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <Toolbar title="Editar perfil" hasBackButton />
        <ScrollView contentContainerStyle={styles.body}>
          <Avatar
            size="giant"
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/79.jpg',
            }}
          />
          <Button appearance="ghost" style={{ marginBottom: 16 }}>
            Alterar foto
          </Button>

          <Input label="Nome" style={styles.inputs} />
          <Input label="E-mail" style={styles.inputs} />
          <Input label="Idade" style={styles.inputs} />
          <Input label="Profissão" style={styles.inputs} />
          <Input label="Bio" multiline style={styles.inputs} />

          <Button style={styles.submitBtn}>Salvar alterações</Button>
        </ScrollView>
      </Layout>
    </TouchableWithoutFeedback>
  );
}
