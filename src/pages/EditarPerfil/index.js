import React, { useEffect, useState } from 'react';
import {
  Alert,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Avatar, Button, Input, Layout } from '@ui-kitten/components';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

import Toolbar from '../../components/Toolbar';
import LoadingIndicator from '../../components/LoadingIndicator';
import styles from './styles';
import editUser from '../../services/editUser';
import defaultAvatar from '../../constants/defaultAvatar';
import uploadUserFile from '../../services/uploadUserFile';

export default function EditarPerfil(props) {
  const {
    route: { params: userInfo },
  } = props;
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { goBack } = useNavigation();

  useEffect(() => {
    const getPermissions = async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        Alert(
          'Precisamos de sua permissão para acessarmos a galeria de seu celular'
        );
      }
    };

    getPermissions();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
      uploadUserFile(result);
    }
  };

  const handleEditProfile = async (values) => {
    setLoading(true);

    try {
      await editUser(values);

      Toast.show({
        type: 'success',
        text1: 'Alterações salvas com sucesso.',
        position: 'bottom',
      });

      goBack();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Ocorreu um erro ao salvar as alterações.',
        position: 'bottom',
      });
    }

    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout style={styles.container}>
        <Toolbar title="Editar perfil" hasBackButton />
        <ScrollView contentContainerStyle={styles.body}>
          <Avatar
            size="giant"
            rounded
            source={{
              uri: image?.uri || userInfo?.thumbUrl || defaultAvatar,
            }}
          />
          <Button
            appearance="ghost"
            style={{ marginBottom: 16 }}
            onPress={pickImage}
          >
            Alterar foto
          </Button>
          <Formik
            initialValues={{
              fullName: userInfo?.fullName,
              email: userInfo?.email,
              age: userInfo?.age,
              occupation: userInfo?.occupation,
              bio: userInfo?.bio,
            }}
            onSubmit={handleEditProfile}
            validateOnMount
            validationSchema={yup.object({
              fullName: yup.string().required('Campo obrigatório.'),
              age: yup.string().required('Campo obrigatório'),
              occupation: yup.string().required('Campo obrigatório'),
            })}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <Input
                  label="Nome"
                  style={styles.inputs}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                  caption={touched.fullName && errors.fullName}
                  status={touched.fullName && errors.fullName && 'danger'}
                />
                <Input
                  label="Idade"
                  style={styles.inputs}
                  onChangeText={handleChange('age')}
                  onBlur={handleBlur('age')}
                  keyboardType="number-pad"
                  value={values.age}
                  caption={touched.age && errors.age}
                  status={touched.age && errors.age && 'danger'}
                />
                <Input
                  label="Profissão"
                  style={styles.inputs}
                  onChangeText={handleChange('occupation')}
                  onBlur={handleBlur('occupation')}
                  value={values.occupation}
                  caption={touched.occupation && errors.occupation}
                  status={touched.occupation && errors.occupation && 'danger'}
                />
                <Input
                  label="Bio"
                  multiline
                  style={styles.inputs}
                  onChangeText={handleChange('bio')}
                  onBlur={handleBlur('bio')}
                  value={values.bio}
                  caption={touched.bio && errors.bio}
                  status={touched.bio && errors.bio && 'danger'}
                />

                <Button
                  style={styles.submitBtn}
                  onPress={handleSubmit}
                  disabled={!isValid || loading}
                  accessoryLeft={loading && LoadingIndicator}
                >
                  Salvar alterações
                </Button>
              </>
            )}
          </Formik>
        </ScrollView>
      </Layout>
    </TouchableWithoutFeedback>
  );
}
