import React from 'react';
import {
 View, 
 Text 
} from 'react-native';
import CardFavorito from '../../components/CardFavoritos';
import styles from './styles';

const data = [
    {
      uuid: '2321jh32hg3u12g3u12',
      title: 'Salada',
      imgUrl:
        'https://www.dicasdemulher.com.br/wp-content/uploads/2017/10/salada-caesar-receitas.jpg',
      owner: 'John Due',
      timeToPrepare: 15,
      difficulty: 'Fácil',
    },
  ];

export default function Favoritos() {
  return (
    <FlatList
          data={[...data]}
          style={{ paddingTop: hp(2) }}
          renderItem={({
            item: { title, imgUrl, owner, timeToPrepare, difficulty },
          }) => (
            <CardFavorito
              title={title}
              imgUrl={imgUrl}
              owner={owner}
              timeToPrepare={timeToPrepare}
              difficulty={difficulty}
              onPress={() => null}
            />
          )}
          ListFooterComponent={<View style={{ flex: 1, height: hp(12) }} />}
          keyExtractor={({ uuid }) => uuid}
        />
  );
}
