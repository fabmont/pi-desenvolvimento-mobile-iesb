import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Layout,
  Text,
  Avatar,
  TopNavigationAction,
  Icon,
  Button,
} from '@ui-kitten/components';
import { signOut } from 'firebase/auth';
import { heightPercentageToDP } from 'react-native-responsive-screen';

import styles from './styles';
import getUserInfo from '../../services/getUserInfo';
import defaultAvatar from '../../constants/defaultAvatar';
import Toolbar from '../../components/Toolbar';
import CardMinhaReceita from '../../components/CardMinhaReceita';
import { auth } from '../../services/firebase';
import getRecipesByUser from '../../services/getRecipesByUser';

export default function Perfil() {
  const { navigate } = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const renderRightAction = () => (
    <TopNavigationAction
      onPress={() => signOut(auth)}
      icon={(props) => <Icon {...props} name="log-out" />}
    />
  );

  useEffect(() => {
    const listener = getUserInfo(setUserInfo);
    const listenerRecipes = getRecipesByUser(setRecipes);

    return () => {
      listener();
      listenerRecipes();
    };
  }, []);

  return (
    <Layout style={styles.container}>
      <Toolbar
        alignment="center"
        title="Perfil"
        accessoryRight={renderRightAction}
      />
      <ScrollView>
        <View style={styles.headerContainer}>
          <Avatar
            style={styles.avatar}
            source={{
              uri: userInfo?.thumbUrl || defaultAvatar,
            }}
          />

          <View style={styles.userInfoBox}>
            <Text style={styles.userName}>{userInfo?.fullName}</Text>
            <Text style={styles.userInfoText}>{userInfo?.email}</Text>
            <Text style={styles.userInfoText}>
              {userInfo?.age && `${userInfo?.age} anos`}{' '}
            </Text>
            <Text style={styles.userInfoText}>{userInfo?.occupation}</Text>
          </View>
        </View>
        <View style={styles.bioBox}>
          <Text style={styles.userInfoText}>{userInfo?.bio}</Text>

          <Button
            size="small"
            appearance="outline"
            status="primary"
            style={{ marginTop: 12 }}
            onPress={() => navigate('EditarPerfil', { ...userInfo })}
          >
            Editar perfil
          </Button>
        </View>

        {!recipes.length && (
          <View
            style={{
              height: heightPercentageToDP(40),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#a1a1a1' }}>
              Você ainda não criou nenhuma receita.
            </Text>
          </View>
        )}
        {recipes.map((i) => (
          <CardMinhaReceita key={i.uid} {...i} />
        ))}
      </ScrollView>
    </Layout>
  );
}
