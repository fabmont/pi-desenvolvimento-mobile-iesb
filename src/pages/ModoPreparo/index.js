/* eslint-disable react/no-array-index-key */
import { Feather } from '@expo/vector-icons';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import FavoriteFAB from '../../components/FavoriteFAB';
import Toolbar from '../../components/Toolbar';
import categories from '../../constants/categories';

import styles from './styles';

export default function ModoPreparo(props) {
  const {
    route: {
      params: { recipe },
    },
  } = props;

  return (
    <Layout style={styles.container}>
      <Toolbar title="Preparar receita" hasBackButton />
      <ScrollView contentContainerStyle={styles.body}>
        <Image source={{ uri: recipe.thumbUrl }} style={styles.coverImg} />
        <Text category="h4" style={styles.title}>
          {recipe.title}
        </Text>
        <Text style={styles.ownerText}>Por {recipe.owner.name}</Text>

        <View style={styles.row}>
          <View style={styles.timeBadge}>
            <Feather name="clock" size={14} color="#FFAA00" />
            <Text style={styles.timeBadgeText}>{recipe.timeToPrepare} min</Text>
          </View>

          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyBadgeText}>
              Serve {recipe.servesNumber}{' '}
              {Number(recipe.servesNumber) > 1 ? 'pessoas' : 'pessoa'}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.categoryBadge}>
            <Feather name="tag" size={14} color="#417bd9" />
            <Text style={styles.categoryBadgeText}>
              {categories[recipe.category]?.label}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text category="h6" style={styles.sectionText}>
            Ingredientes
          </Text>
        </View>
        <View style={{ width: '100%' }}>
          {recipe.ingredients.map((ingredient, index) => (
            <View
              key={index}
              style={{
                width: '100%',
                flexDirection: 'row',
                marginBottom: 8,
              }}
            >
              <View>
                <Text style={styles.ingredientItem}>•</Text>
              </View>
              <View style={{ marginLeft: 16, flex: 1 }}>
                <Text style={styles.ingredientItem}>{ingredient}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text category="h6" style={styles.sectionText}>
            Modo de preparo
          </Text>
        </View>
        <View style={{ width: '100%' }}>
          {recipe.prepare.map((step, index) => (
            <View
              key={index}
              style={{
                width: '100%',
                flexDirection: 'row',
                marginBottom: 16,
                alignItems: 'center',
              }}
            >
              <View>
                <Text category="h4" style={styles.stepIndex}>
                  {index + 1}
                </Text>
              </View>
              <View style={{ marginLeft: 16, flex: 1 }}>
                <Text style={styles.ingredientItem}>{step}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <FavoriteFAB recipeUid={recipe.uid} />
    </Layout>
  );
}
