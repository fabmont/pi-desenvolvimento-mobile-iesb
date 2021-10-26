import {
  Button,
  Divider,
  Icon,
  Input,
  Layout,
  List,
  ListItem,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import { ScrollView, View } from 'react-native';
import Toolbar from '../../components/Toolbar';

import styles from './styles';
import categories from '../../constants/categories';

export default function CriarReceita() {
  const renderItemAccessory = () => (
    <Button
      size="small"
      appearance="ghost"
      accessoryLeft={(props) => <Icon name="close" {...props} />}
    />
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <Layout style={styles.container}>
      <Toolbar hasBackButton title="Criar receita" />
      <ScrollView contentContainerStyle={styles.body}>
        <Input style={styles.input} label="Nome da receita" />
        <Input
          style={styles.input}
          label="Descrição da receita"
          multiline
          textStyle={{ minHeight: 64 }}
        />
        <Select
          label="Categoria da receita"
          placeholder="Selecione uma categoria..."
          style={styles.input}
        >
          {categories.map((cat) => (
            <SelectItem key={cat.id} title={cat.label} />
          ))}
        </Select>

        <View style={styles.row}>
          <Input
            style={{ ...styles.input, flex: 1 }}
            label="Tempo de preparo"
            placeholder="15"
            keyboardType="numeric"
            accessoryRight={(props) => <Text {...props}>min</Text>}
          />
          <View style={{ width: 16 }} />
          <Input
            style={{ ...styles.input, flex: 1 }}
            label="Rendimento (pessoas)"
            placeholder="0"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>Ingredientes</Text>
        </View>
        <List
          data={new Array(2).fill({
            title: 'Title for Item',
          })}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
          style={styles.input}
        />
        <View style={styles.centered}>
          <Button
            size="small"
            appearance="outline"
            accessoryLeft={(props) => <Icon name="plus" {...props} />}
          >
            Adicionar ingrediente
          </Button>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>Modo de preparo</Text>
        </View>
        <List
          data={new Array(2).fill({
            title: 'Title for Item',
          })}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
          style={styles.input}
        />
        <View style={styles.centered}>
          <Button
            size="small"
            appearance="outline"
            accessoryLeft={(props) => <Icon name="plus" {...props} />}
          >
            Adicionar novo passo
          </Button>
        </View>
      </ScrollView>
      <Button
        size="large"
        style={styles.submitBtn}
        accessoryLeft={(props) => <Icon name="corner-up-right" {...props} />}
      >
        Enviar receita
      </Button>
    </Layout>
  );
}
