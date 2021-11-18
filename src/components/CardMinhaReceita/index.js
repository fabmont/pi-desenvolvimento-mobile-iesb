import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { Button, Icon, Text } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function CardMinhaReceita({
  title,
  thumbUrl,
  timeToPrepare,
  onPress,
  likes,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <ImageBackground
        source={{ uri: thumbUrl }}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <View>
              <Text category="h5" style={styles.recipeTitle}>
                {title}
              </Text>
              <Text category="label" style={styles.recipeOwner}>
                {timeToPrepare} min
              </Text>
            </View>

            <View style={styles.footer}>
              <View style={styles.row}>
                <Feather name="heart" size={24} color="#FFF" />
                <Text style={styles.likeLabel}>{likes || 0}</Text>
              </View>

              <Button
                size="small"
                accessoryLeft={(props) => <Icon {...props} name="edit" />}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
