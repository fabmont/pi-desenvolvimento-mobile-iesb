import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Layout,
  Text,
  Avatar,
  TopNavigationAction,
  OverflowMenu,
  Icon,
  MenuItem,
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
  const [openPopup, setOpenPopup] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const toggleMenu = () => {
    setOpenPopup(!openPopup);
  };

  const renderMenuAction = () => (
    <TopNavigationAction
      icon={(props) => <Icon {...props} name="more-vertical" />}
      onPress={toggleMenu}
    />
  );

  const renderRightActions = () => (
    <>
      <TopNavigationAction
        onPress={() => navigate('EditarPerfil', { ...userInfo })}
        icon={(props) => <Icon {...props} name="edit" />}
      />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={openPopup}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={(props) => <Icon {...props} name="log-out" />}
          onPress={() => signOut(auth)}
          title="Sair"
        />
      </OverflowMenu>
    </>
  );

  useEffect(() => {
    const listener = getUserInfo(setUserInfo);

    return () => listener();
  }, []);

  return (
    <Layout style={styles.container}>
      <Toolbar
        alignment="start"
        title={userInfo?.fullName}
        accessoryRight={renderRightActions}
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
            <Text style={styles.userInfoText}>{userInfo?.email}</Text>
            <Text style={styles.userInfoText}>{userInfo?.age}</Text>
            <Text style={styles.userInfoText}>{userInfo?.occupation}</Text>
          </View>
        </View>
        <View style={styles.bioBox}>
          <Text style={styles.userInfoText}>{userInfo?.bio}</Text>
        </View>

        {data.map((i) => (
          <CardMinhaReceita key={i.uuid} {...i} />
        ))}
      </ScrollView>
    </Layout>
  );
}
