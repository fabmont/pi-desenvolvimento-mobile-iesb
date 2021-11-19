import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Layout, Text, List } from '@ui-kitten/components';

import styles from './styles';
import {
  getUserFavorites,
  getUserFavoritesList,
} from '../../services/isFavoriteListener';
import CardReceita from '../../components/CardReceita';

export default function Favoritos() {
  const [list, setList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const renderItem = ({ item }) => <CardReceita {...item} fromFavorites />;

  useEffect(() => {
    const listener = getUserFavoritesList(setList);

    return () => {
      listener();
    };
  }, []);

  useEffect(() => {
    const queryList = list.length ? list : ['1'];
    const favoritedRecipesListener = getUserFavorites(queryList, setFavorites);

    return () => favoritedRecipesListener();
  }, [list]);

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Text category="h4" style={styles.headerTitle}>
          Favoritos
        </Text>
      </View>
      <List
        data={favorites}
        renderItem={renderItem}
        style={{ height: '100%', paddingTop: 12 }}
      />
    </Layout>
  );
}
