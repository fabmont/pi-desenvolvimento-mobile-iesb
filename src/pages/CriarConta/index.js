import React from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Button, Input, Layout } from '@ui-kitten/components';
import Toolbar from '../../components/Toolbar';
import styles from './styles';
import PasswordInput from '../../components/PasswordInput';

export default function CriarConta() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <Toolbar title="Criar conta" hasBackButton />
        <ScrollView contentContainerStyle={styles.body}>
          <Input label="Nome completo" style={styles.inputs} />
          <Input label="E-mail" style={styles.inputs} />
          <PasswordInput label="Senha" style={styles.inputs} />
          <PasswordInput label="Confirmar senha" style={styles.inputs} />

          <Button style={styles.submitBtn}>Criar conta</Button>
        </ScrollView>
      </Layout>
    </TouchableWithoutFeedback>
  );
}
