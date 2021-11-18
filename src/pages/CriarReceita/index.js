import React, { useState } from 'react';
import {
  Button,
  Card,
  Divider,
  Icon,
  Input,
  Layout,
  List,
  ListItem,
  Modal,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import categories from '../../constants/categories';
import Toolbar from '../../components/Toolbar';
import CardFooter from '../../components/CardFooter';
import createNewRecipe from '../../services/createNewRecipe';
import LoadingIndicator from '../../components/LoadingIndicator';

export default function CriarReceita() {
  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const [ingredientModalValue, setIngredientModalValue] = useState('');
  const [showPrepareModeModal, setShowPrepareModeModal] = useState(false);
  const [prepareModeModalValue, setPrepareModeModalValue] = useState('');
  const [loading, setLoading] = useState(false);
  const { goBack } = useNavigation();
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      thumbImg: null,
      name: '',
      description: '',
      category: null,
      timeToPrepare: '',
      servesNumber: '',
      ingredients: [],
      prepare: [],
    },
    validateOnMount: true,
    onSubmit: async (val) => {
      setLoading(true);
      try {
        await createNewRecipe(val);

        Toast.show({
          text1: 'Receita criada com sucesso!',
          type: 'success',
        });

        goBack();
      } catch (error) {
        Toast.show({
          text1: error,
          type: 'error',
        });
        setLoading(false);
      }
    },
    validationSchema: yup.object({
      name: yup.string().required('Campo obrigatório.'),
      description: yup.string().required('Campo obrigatório.'),
      category: yup.string().required('Campo obrigatório.'),
      timeToPrepare: yup.string().required('Campo obrigatório.'),
      servesNumber: yup.string().required('Campo obrigatório.'),
      ingredients: yup.array().min(1),
      prepare: yup.array().min(1),
    }),
  });

  const pickThumbImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFieldValue('thumbImg', result);
    }
  };

  const renderItemAccessory = (index, fieldName) => (
    <Button
      size="small"
      appearance="ghost"
      accessoryLeft={(props) => <Icon name="close" {...props} />}
      onPress={() => {
        const copy = [...values.ingredients];
        copy.splice(index, 1);
        setFieldValue(fieldName, copy);
      }}
    />
  );

  const renderItem = (fieldName, { item, index }) => (
    <ListItem
      title={item}
      accessoryRight={() => renderItemAccessory(index, fieldName)}
    />
  );

  return (
    <Layout style={styles.container}>
      <Toolbar hasBackButton title="Criar receita" />
      <ScrollView contentContainerStyle={styles.body}>
        <TouchableOpacity activeOpacity={0.6} onPress={pickThumbImage}>
          <ImageBackground
            style={styles.thumbBox}
            source={{
              uri: values?.thumbImg?.uri || null,
            }}
          >
            {!values?.thumbImg?.uri && (
              <>
                <Feather
                  name="image"
                  size={widthPercentageToDP(12)}
                  color="#a5a5a5"
                />
                <Text style={styles.thumbText}>
                  Escolha uma imagem para a receita...
                </Text>
              </>
            )}
          </ImageBackground>
        </TouchableOpacity>
        <Input
          style={styles.input}
          label="Nome da receita"
          value={values.name}
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          caption={touched.name && errors.name}
          status={touched.name && errors.name && 'danger'}
        />

        <Input
          style={styles.input}
          label="Descrição da receita"
          multiline
          textStyle={{ minHeight: 64 }}
          value={values.description}
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
          caption={touched.description && errors.description}
          status={touched.description && errors.description && 'danger'}
        />

        <Select
          label="Categoria da receita"
          placeholder="Selecione uma categoria..."
          style={styles.input}
          selectedIndex={values.category}
          value={categories[values?.category?.row]?.label}
          onSelect={(index) => setFieldValue('category', index)}
          caption={touched.category && errors.category}
          status={touched.category && errors.category && 'danger'}
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
            value={values.timeToPrepare}
            onChangeText={handleChange('timeToPrepare')}
            onBlur={handleBlur('timeToPrepare')}
            caption={touched.timeToPrepare && errors.timeToPrepare}
            status={touched.timeToPrepare && errors.timeToPrepare && 'danger'}
          />

          <View style={{ width: 16 }} />

          <Input
            style={{ ...styles.input, flex: 1 }}
            label="Rendimento (pessoas)"
            placeholder="0"
            keyboardType="numeric"
            value={values.servesNumber}
            onChangeText={handleChange('servesNumber')}
            onBlur={handleBlur('servesNumber')}
            caption={touched.servesNumber && errors.servesNumber}
            status={touched.servesNumber && errors.servesNumber && 'danger'}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>Ingredientes</Text>
        </View>
        <List
          data={values.ingredients}
          renderItem={(items) => renderItem('ingredients', items)}
          ItemSeparatorComponent={Divider}
          style={styles.input}
        />
        <View style={styles.centered}>
          <Button
            size="small"
            appearance="outline"
            accessoryLeft={(props) => <Icon name="plus" {...props} />}
            onPress={() => setShowIngredientModal(true)}
          >
            Adicionar ingrediente
          </Button>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>Modo de preparo</Text>
        </View>
        <List
          data={values.prepare}
          renderItem={(items) => renderItem('prepare', items)}
          ItemSeparatorComponent={Divider}
          style={styles.input}
        />
        <View style={styles.centered}>
          <Button
            size="small"
            appearance="outline"
            accessoryLeft={(props) => <Icon name="plus" {...props} />}
            onPress={() => setShowPrepareModeModal(true)}
          >
            Adicionar novo passo
          </Button>
        </View>
      </ScrollView>
      <Button
        size="large"
        style={styles.submitBtn}
        onPress={handleSubmit}
        disabled={!isValid}
        accessoryLeft={loading && LoadingIndicator}
      >
        Enviar receita
      </Button>

      <Modal
        visible={showIngredientModal}
        backdropStyle={{ backgroundColor: 'black', opacity: 0.5 }}
        onBackdropPress={() => setShowIngredientModal(false)}
        style={{ width: widthPercentageToDP(90) }}
      >
        <Card
          footer={() => (
            <CardFooter
              onOk={() => {
                const copy = [...values.ingredients];
                setFieldValue('ingredients', [...copy, ingredientModalValue]);
                setIngredientModalValue('');
                setShowIngredientModal(false);
              }}
              onCancel={() => setShowIngredientModal(false)}
              disableSubmit={!ingredientModalValue}
            />
          )}
        >
          <Input
            style={{ ...styles.input, flex: 1 }}
            label="Nome do ingrediente"
            placeholder="ex: 500g de arroz"
            value={ingredientModalValue}
            onChangeText={(e) => setIngredientModalValue(e)}
          />
        </Card>
      </Modal>

      <Modal
        visible={showPrepareModeModal}
        backdropStyle={{ backgroundColor: 'black', opacity: 0.5 }}
        onBackdropPress={() => setShowPrepareModeModal(false)}
        style={{ width: widthPercentageToDP(90) }}
      >
        <Card
          footer={() => (
            <CardFooter
              onOk={() => {
                const copy = [...values.prepare];
                setFieldValue('prepare', [...copy, prepareModeModalValue]);
                setPrepareModeModalValue('');
                setShowPrepareModeModal(false);
              }}
              onCancel={() => setShowPrepareModeModal(false)}
              disableSubmit={!prepareModeModalValue}
            />
          )}
        >
          <Input
            style={{ ...styles.input, flex: 1 }}
            label="Descrição do passo"
            placeholder="ex: Corte as cebolas em rodelas e as reserve."
            value={prepareModeModalValue}
            onChangeText={(e) => setPrepareModeModalValue(e)}
          />
        </Card>
      </Modal>
    </Layout>
  );
}
