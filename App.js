import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		setCourseGoals(currentCourseGoals => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() }
		]);
		setEnteredGoalText('');
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput placeholder='Your course goal!' onChangeText={goalInputHandler} style={styles.textInput} value={enteredGoalText} />
				<Button title='Add Goal' onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList data={courseGoals} alwaysBounceVertical={false}
					renderItem={itemData => {
						return (
							<View style={styles.goalItem}>
								<Text style={styles.goalText}>{itemData.item.text}</Text>
							</View>
						);
					}}
					keyExtractor={(item, index) => { return item.id }} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8
	},
	goalsContainer: {
		flex: 11,
	},
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
		color: 'white'
	},
	goalText: {
		color: 'white',
		fontSize: 16
	}
});