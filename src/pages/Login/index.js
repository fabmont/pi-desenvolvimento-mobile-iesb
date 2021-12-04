import React, { useState } from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, Input, Layout, Spinner, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';

import styles from './styles';
import loginCover from '../../assets/login-cover.png';
import PasswordInput from '../../components/PasswordInput';
import login from '../../services/login';

const LoadingIndicator = ({ style }) => (
  <View style={style}>
    <Spinner size="small" />
  </View>
);

export default function Login() {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (values) => {
    setLoading(true);

    try {
      await login(values);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <Image style={styles.cover} source={loginCover} resizeMode="stretch" />
        <Layout style={styles.body}>
          {!!error && (
            <View style={styles.alertbox}>
              <Text style={styles.alertboxText}>{error}</Text>
            </View>
          )}
          <Formik
            validateOnMount
            initialValues={{ email: '', password: '' }}
            validationSchema={yup.object({
              email: yup
                .string()
                .required('Campo obrigatório.')
                .email('Formato de e-mail inválido'),
              password: yup
                .string()
                .required('Campo obrigatório.')
                .min(6, 'Mínimo de 6 caracteres.'),
            })}
            onSubmit={handleLogin}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <View style={{ width: '100%' }}>
                <Text category="h4" style={styles.title}>
                  Login
                </Text>
                <Input
                  label="E-mail"
                  style={styles.inputs}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  caption={touched.email && errors.email}
                  status={touched.email && errors.email && 'danger'}
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  keyboardType="email-address"
                />
                <PasswordInput
                  label="Senha"
                  style={styles.inputs}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  caption={touched.password && errors.password}
                  status={touched.password && errors.password && 'danger'}
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                />
                <Button
                  style={styles.loginBtn}
                  onPress={handleSubmit}
                  disabled={!isValid || loading}
                  accessoryLeft={loading && LoadingIndicator}
                >
                  Entrar
                </Button>
              </View>
            )}
          </Formik>

          <View style={{ width: '100%' }}>
            <Text style={styles.signupLabel}>Não tem uma conta ainda?</Text>
            <Button appearance="ghost" onPress={() => navigate('CriarConta')}>
              Cadastre-se
            </Button>
          </View>
        </Layout>
      </Layout>
    </TouchableWithoutFeedback>
  );
}
