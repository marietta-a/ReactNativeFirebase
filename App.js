/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/**
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const [initializing, setInitializing] = useState<Boolean>(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user){
    setUser(user);
    if(initializing){
      setInitializing(false);
    }
  }

  useEffect(() => {
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
     return subscriber;
  }, []);
  
  if(initializing) return null;
  if(!user){
    return(
      <View>
        <Button>Login</Button>
      </View>
    )
  }

  return(
    <View>
      <Text>Welcome {user?.Email}</Text>
    </View>
  )

};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
