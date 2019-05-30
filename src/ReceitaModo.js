import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default class ReceitaModo extends Component {

	static navigationOptions = {
		tabBarLabel:'Preparo'
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<View style={styles.areaTab}>
				<FlatList
					data={this.props.screenProps.modo}
					renderItem={({item}) => 
						<Text style={styles.ingItem}>
							<Text style={styles.passo}>
								-- Passo {item.key}:{'  '} 
							</Text> 
							
							<Text style={styles.texto}>
								{item.txt}
							</Text>
						</Text>}

					keyExtractor = { (item, index) => index.toString() }
				/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	areaTab:{
		flex:1,
		margin:10
	},
	ingItem:{
		fontSize:16,
		marginBottom:10
	},
	passo:{
		fontSize: 15,
		fontWeight: 'bold'
	},
	texto:{
		
	}
});