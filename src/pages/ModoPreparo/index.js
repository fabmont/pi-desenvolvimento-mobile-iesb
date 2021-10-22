/* eslint-disable react/no-array-index-key */
import { Feather } from '@expo/vector-icons';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import Toolbar from '../../components/Toolbar';

import styles from './styles';

export default function ModoPreparo() {
  const data = {
    uuid: '2321jh32hg3u12g3u12',
    title: 'Salada Caesar',
    imgUrl:
      'https://www.dicasdemulher.com.br/wp-content/uploads/2017/10/salada-caesar-receitas.jpg',
    owner: 'John Due',
    timeToPrepare: 15,
    difficulty: 'Fácil',
    ingredients: [
      '1 alface americana',
      '1 peito de frango sem osso, temperado, grelhado e picado em tiras (opcional)',
      '1 xícara de parmesão ralado',
      '2 xícaras de croutons bem crocantes (feitos com pão de forma sem casca)',
      '1/2 xícara de óleo (milho, canola ou girasol)',
      '1/2 xícara de azeite de boa qualidade',
      '1 gema',
      '2 dentes de alho amassados',
      '5 filés de anchovas',
      '2 colheres de sopa de maionese caseira',
      '1 colher de sopa mostarda',
      '1 colher de sopa de suco de limão',
    ],
    steps: [
      'Coloque todos os ingredientes no liquidificador, bata bem pouco, somente para unir os ingredientes, se bater demais irá virar uma maionese.',
      'Arrume a alface em uma saladeira funda, coloque o frango em tiras (opcional) e regue com o molho, polvilhe o parmesão.',
      'Cubra com os croutons somente na hora de servir para não amolecer.',
      'Acompanhado de um bom bife à milanesa não há quem resista.',
      'É uma refeição completa',
    ],
  };

  return (
    <Layout style={styles.container}>
      <Toolbar title="Preparar receita" hasBackButton />
      <ScrollView contentContainerStyle={styles.body}>
        <Image source={{ uri: data.imgUrl }} style={styles.coverImg} />
        <Text category="h4" style={styles.title}>
          {data.title}
        </Text>
        <Text style={styles.ownerText}>Por {data.owner}</Text>

        <View style={styles.row}>
          <View style={styles.timeBadge}>
            <Feather name="clock" size={14} color="#FFAA00" />
            <Text style={styles.timeBadgeText}>{data.timeToPrepare} min</Text>
          </View>

          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyBadgeText}>{data.difficulty}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text category="h6" style={styles.sectionText}>
            Ingredientes
          </Text>
        </View>
        <View style={{ width: '100%' }}>
          {data.ingredients.map((ingredient, index) => (
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
          {data.steps.map((step, index) => (
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
    </Layout>
  );
}
