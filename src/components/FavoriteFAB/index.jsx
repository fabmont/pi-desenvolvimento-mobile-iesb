import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import isFavoriteListener, {
  setFavorite,
} from '../../services/isFavoriteListener';

const FavoriteFAB = ({ recipeUid }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const listener = isFavoriteListener(recipeUid, setIsFavorite);

    return () => listener();
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => setFavorite(isFavorite, recipeUid)}
    >
      <FontAwesome
        name={isFavorite ? 'heart' : 'heart-o'}
        color="white"
        size={18}
      />
    </TouchableOpacity>
  );
};

export default FavoriteFAB;
