import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function CardReceita({
  title,
  imgUrl,
  owner,
  timeToPrepare,
  difficulty,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        style={styles.cardImage}
        source={{
          uri: imgUrl,
        }}
      />

      <View style={styles.content}>
        <View>
          <Text category="h5" style={styles.recipeTitle}>
            {title}
          </Text>
          <Text category="label" style={styles.recipeOwner}>
            Por {owner}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.row}>
            <View style={styles.timeBadge}>
              <Feather name="clock" color="#FFAA00" />
              <Text category="label" style={styles.timeBadgeText}>
                {timeToPrepare} min
              </Text>
            </View>

            <View style={styles.difficultyBadge}>
              <Text category="label" style={styles.difficultyBadgeText}>
                {difficulty}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
