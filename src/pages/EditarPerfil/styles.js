import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
  },
    screen: {
     flex: 1, 
     marginTop:60,
      alignItems: 'center',
      
    },
    nomebox:{
       width: '93%',
     marginTop:27,
      height: 38,
      top:1,
      fontSize:20,
      marginLeft:30,
      marginRight:30,
      backgroundColor: '#eaeaea',
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom:-4,
      padding: 10,
      
    },
  emailbox:{
     width: '93%',
     marginTop:27,
      height: 38,
      fontSize:20,
      marginLeft:30,
      marginRight:30,
      backgroundColor: '#eaeaea',
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom: -4,
     padding: 10,
  },
  idadebox:{
   width: '93%',
     marginTop:27,
      height: 38,
      fontSize:20,
      marginLeft:30,
      marginRight:30,
      backgroundColor: '#eaeaea',
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom:-4,
      padding: 10,
  },
  profissaobox:{
    width: '93%',
     marginTop:27,
      height: 38,
      fontSize:20,
      marginLeft:30,
      marginRight:30,
      backgroundColor: '#eaeaea',
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom:-4,
      padding: 10,
  },
  biobox:{
    width: '93%',
     marginTop:27,
      height: 38,
      fontSize:20,
      marginLeft:30,
      marginRight:30,
      backgroundColor: '#eaeaea',
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom:20,
      padding: 10,
     
  
  },
  alteracaobox:{
    width: '93%',
      height: 30,
      backgroundColor: '#f5a623',
      borderRadius: 5,
      justifyContent: 'center',
  }
  
  });