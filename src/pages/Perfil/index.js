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

import styles from './styles';
import getUserInfo from '../../services/getUserInfo';
import defaultAvatar from '../../constants/defaultAvatar';
import Toolbar from '../../components/Toolbar';
import CardMinhaReceita from '../../components/CardMinhaReceita';
import { auth } from '../../services/firebase';

const data = [
  {
    uuid: '2321jh32hg3u12g3u12',
    title: 'Salada Caesar',
    imgUrl:
      'https://www.dicasdemulher.com.br/wp-content/uploads/2017/10/salada-caesar-receitas.jpg',
    owner: 'John Due',
    timeToPrepare: 15,
    difficulty: 'Fácil',
  },
];

export default function Perfil() {
  const { navigate } = useNavigation();
  const [userInfo, setUserInfo] = useState(null);

  const renderRightAction = () => (
    <TopNavigationAction
      onPress={() => signOut(auth)}
      icon={(props) => <Icon {...props} name="log-out" />}
    />
  );

  useEffect(() => {
    const listener = getUserInfo(setUserInfo);

    return () => listener();
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

        {data.map((i) => (
          <CardMinhaReceita key={i.uuid} {...i} />
        ))}
      </ScrollView>
    </Layout>
  );
}
