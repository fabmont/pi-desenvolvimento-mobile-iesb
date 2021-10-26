import React from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';

import styles from './styles';
import loginCover from '../../assets/login-cover.png';
import PasswordInput from '../../components/PasswordInput';

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <Image style={styles.cover} source={loginCover} resizeMode="stretch" />
        <Layout style={styles.body}>
          <View style={{ width: '100%' }}>
            <Text category="h4" style={styles.title}>
              Login
            </Text>
            <Input label="E-mail" style={styles.inputs} />
            <PasswordInput label="Senha" style={styles.inputs} />
            <Button style={styles.loginBtn}>Entrar</Button>
          </View>

          <View style={{ width: '100%' }}>
            <Text style={styles.signupLabel}>Não tem uma conta ainda?</Text>
            <Button appearance="ghost">Cadastre-se</Button>
          </View>
        </Layout>
      </Layout>
    </TouchableWithoutFeedback>
  );
}
