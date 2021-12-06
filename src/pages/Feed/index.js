/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  TextInput,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  RefreshControl,
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
import getFeedRecipes from '../../services/getFeedRecipes';

export default function Feed() {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categoryState, setCategoryState] = useState(
    categories.map((item) => ({
      id: item.id,
      label: item.label,
      checked: false,
    }))
  );

  const handleClearSearch = () => setSearch('');

  const fetchData = async () => {
    setLoading(true);
    try {
      await getFeedRecipes(setData);
      setError(null);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

          {/* <View style={styles.filterRow}>
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
          </View> */}
        </View>

        {error && (
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>{error}</Text>
          </View>
        )}

        <FlatList
          data={[...data]}
          style={{ paddingTop: hp(2) }}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={fetchData} />
          }
          renderItem={({ item }) => <CardReceita key={item?.uid} {...item} />}
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
