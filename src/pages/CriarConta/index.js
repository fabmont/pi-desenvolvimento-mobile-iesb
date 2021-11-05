import React from 'react';
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Button, Input, Layout, Spinner, Text } from '@ui-kitten/components';
import { Formik } from 'formik';
import * as yup from 'yup';

import Toolbar from '../../components/Toolbar';
import styles from './styles';
import PasswordInput from '../../components/PasswordInput';
import useAuth from '../../hooks/useAuth';

const LoadingIndicator = ({ style }) => (
  <View style={style}>
    <Spinner size="small" />
  </View>
);

export default function CriarConta() {
  const { createUser, isCreatingUser, userCreationError } = useAuth();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <Toolbar title="Criar conta" hasBackButton />
        <ScrollView contentContainerStyle={styles.body}>
          {userCreationError && (
            <View style={styles.alertbox}>
              <Text style={styles.alertboxText}>{userCreationError}</Text>
            </View>
          )}
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values) => createUser(values)}
            validateOnMount
            validationSchema={yup.object({
              fullName: yup.string().required('Campo obrigatório.'),
              email: yup
                .string()
                .required('Campo obrigatório.')
                .email('Formato de e-mail inválido'),
              password: yup
                .string()
                .required('Campo obrigatório.')
                .min(6, 'Mínimo de 6 caracteres.'),
              confirmPassword: yup
                .string()
                .required('Campo obrigatório.')
                .oneOf(
                  [yup.ref('password'), null],
                  'Confirmação da senha inválida.'
                ),
            })}
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
              <>
                <Input
                  label="Nome completo"
                  style={styles.inputs}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                  caption={touched.fullName && errors.fullName}
                  status={touched.fullName && errors.fullName && 'danger'}
                />
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
                <PasswordInput
                  label="Confirmar senha"
                  style={styles.inputs}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  caption={touched.confirmPassword && errors.confirmPassword}
                  status={
                    touched.confirmPassword &&
                    errors.confirmPassword &&
                    'danger'
                  }
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                />

                <Button
                  style={styles.submitBtn}
                  onPress={handleSubmit}
                  disabled={!isValid || isCreatingUser}
                  accessoryLeft={isCreatingUser && LoadingIndicator}
                >
                  Criar conta
                </Button>
              </>
            )}
          </Formik>
        </ScrollView>
      </Layout>
    </TouchableWithoutFeedback>
  );
}
