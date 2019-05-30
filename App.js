import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Lista from './src/Lista';
import Receita from './src/Receita';

const AppNavigator = createStackNavigator({
  Lista:{
		screen:Lista
	},
	Receita:{
		screen:Receita
	}
});

export default createAppContainer(AppNavigator);
