/* eslint-disable camelcase */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthState } from 'react-firebase-hooks/auth';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
  Inter_900Black,
} from '@expo-google-fonts/inter';

import Login from './Login';
import CriarConta from './CriarConta';
import Feed from './Feed';
import Favoritos from './Favoritos';
import DetalhesReceita from './DetalhesReceita';
import ModoPreparo from './ModoPreparo';
import CriarReceita from './CriarReceita';
import Perfil from './Perfil';
import EditarPerfil from './EditarPerfil';
import { auth } from '../services/firebase';

const Stack = createNativeStackNavigator();
const defaultRouteProps = {
  options: {
    headerShown: false,
  },
};

export default function Pages() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
  });

  const [user, loading, error] = useAuthState(auth);
  const isLogged = !!user && !loading && !error;

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogged ? (
          <>
            <Stack.Screen name="Feed" component={Feed} {...defaultRouteProps} />
            <Stack.Screen
              name="Favoritos"
              component={Favoritos}
              {...defaultRouteProps}
            />
            <Stack.Screen
              name="Detalhes"
              component={DetalhesReceita}
              {...defaultRouteProps}
            />
            <Stack.Screen
              name="ModoPreparo"
              component={ModoPreparo}
              {...defaultRouteProps}
            />
            <Stack.Screen
              name="EditarReceita"
              component={EditarPerfil}
              {...defaultRouteProps}
            />
            <Stack.Screen
              name="CriarReceita"
              component={CriarReceita}
              {...defaultRouteProps}
            />
            <Stack.Screen
              name="Perfil"
              component={Perfil}
              {...defaultRouteProps}
            />
            <Stack.Screen
              name="EditarPerfil"
              component={EditarPerfil}
              {...defaultRouteProps}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              {...defaultRouteProps}
            />
            <Stack.Screen
              name="CriarConta"
              component={CriarConta}
              {...defaultRouteProps}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
