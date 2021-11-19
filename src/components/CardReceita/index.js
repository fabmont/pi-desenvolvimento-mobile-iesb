import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { setFavorite } from '../../services/isFavoriteListener';

export default function CardReceita(props) {
  const {
    uid,
    title,
    thumbUrl,
    owner,
    timeToPrepare,
    servesNumber,
    fromFavorites,
  } = props;
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('ModoPreparo', { recipe: { ...props } })}
      activeOpacity={0.8}
    >
      <Image
        style={styles.cardImage}
        source={{
          uri: thumbUrl,
        }}
      />

      <View style={styles.content}>
        <View>
          <Text category="h5" style={styles.recipeTitle}>
            {title}
          </Text>
          <Text category="label" style={styles.recipeOwner}>
            Por {owner?.name}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.row}>
            {fromFavorites ? (
              <Button size="small" onPress={() => setFavorite(true, uid)}>
                Remover
              </Button>
            ) : (
              <>
                <View style={styles.timeBadge}>
                  <Feather name="clock" color="#FFAA00" />
                  <Text category="label" style={styles.timeBadgeText}>
                    {timeToPrepare} min
                  </Text>
                </View>
                <View style={styles.difficultyBadge}>
                  <Text style={styles.difficultyBadgeText}>
                    Serve {servesNumber}{' '}
                    {Number(servesNumber) > 1 ? 'pessoas' : 'pessoa'}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
