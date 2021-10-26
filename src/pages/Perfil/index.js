import React, { useState } from 'react';
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
import Toolbar from '../../components/Toolbar';
import CardMinhaReceita from '../../components/CardMinhaReceita';

import styles from './styles';

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
        onPress={() => navigate('EditarPerfil')}
        icon={(props) => <Icon {...props} name="edit" />}
      />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={openPopup}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={(props) => <Icon {...props} name="log-out" />}
          title="Sair"
        />
      </OverflowMenu>
    </>
  );

  return (
    <Layout style={styles.container}>
      <Toolbar
        alignment="start"
        title="User Name"
        accessoryRight={renderRightActions}
      />
      <ScrollView>
        <View style={styles.headerContainer}>
          <Avatar
            style={styles.avatar}
            source={{
              uri: 'https://randomuser.me/api/portraits/men/79.jpg',
            }}
          />

          <View style={styles.userInfoBox}>
            <Text style={styles.userInfoText}>user@mail.com</Text>
            <Text style={styles.userInfoText}>25 anos</Text>
            <Text style={styles.userInfoText}>Cozinheiro gastronômico</Text>
          </View>
        </View>
        <View style={styles.bioBox}>
          <Text style={styles.userInfoText}>
            Sou um jovem recém formado em gastronomia e apaixonado pela
            culinária brasileira.
          </Text>
        </View>

        {data.map((i) => (
          <CardMinhaReceita key={i.uuid} {...i} />
        ))}
      </ScrollView>
    </Layout>
  );
}
