/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import {
  Keyboard,
  TextInput,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import CardReceita from '../../components/CardReceita';
import FloatingButton from '../../components/FloatingButton';
import FilterModal from '../../components/FilterModal';
import categories from '../../constants/categories';

export default function Feed() {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [categoryState, setCategoryState] = useState(
    categories.map((item) => ({
      id: item.id,
      label: item.label,
      checked: false,
    }))
  );

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

  const handleClearSearch = () => setSearch('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <View style={styles.header}>
          <Text category="h4" style={styles.headerTitle}>
            Feed
          </Text>

          <View style={styles.searchContainer}>
            <Feather name="search" size={20} color="#c9c9c9" />
            <TextInput
              style={styles.searchInput}
              placeholderTextColor="#c9c9c9"
              placeholder="Pesquisar receitas"
              onChangeText={setSearch}
              value={search}
            />
            {!!search.length && (
              <TouchableOpacity
                hitSlop={{ bottom: 14, top: 14, right: 14, left: 14 }}
                onPress={handleClearSearch}
              >
                <Feather name="x-circle" size={16} color="#c9c9c9" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.filterRow}>
            <TouchableOpacity activeOpacity={0.7} style={styles.filterBadge}>
              <Feather
                name="chevron-down"
                color="#424242"
                style={{ marginRight: 4 }}
              />
              <Text category="label" style={styles.filterBadgeText}>
                Ordenar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setFilterModalVisible(true)}
              activeOpacity={0.7}
              style={
                categoryState.find((i) => i.checked === true)
                  ? { ...styles.filterBadge, ...styles.filterBadgeActive }
                  : styles.filterBadge
              }
            >
              <Text
                category="label"
                style={
                  categoryState.find((i) => i.checked === true)
                    ? {
                        ...styles.filterBadgeText,
                        ...styles.filterBadgeTextActive,
                      }
                    : styles.filterBadgeText
                }
              >
                Filtros
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={[...data]}
          style={{ paddingTop: hp(2) }}
          renderItem={({
            item: { title, imgUrl, owner, timeToPrepare, difficulty },
          }) => (
            <CardReceita
              title={title}
              imgUrl={imgUrl}
              owner={owner}
              timeToPrepare={timeToPrepare}
              difficulty={difficulty}
              onPress={() => navigate('ModoPreparo')}
            />
          )}
          ListFooterComponent={<View style={{ flex: 1, height: hp(12) }} />}
          keyExtractor={({ uuid }) => uuid}
        />

        <FloatingButton
          iconName="plus"
          label="Criar receita"
          onPress={() => navigate('CriarReceita')}
        />

        <FilterModal
          visible={filterModalVisible}
          setVisible={setFilterModalVisible}
          categoryState={categoryState}
          setCategoryState={setCategoryState}
          initialState={categoryState.map((i) => i.checked)}
        />
      </Layout>
    </TouchableWithoutFeedback>
  );
}
