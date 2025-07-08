import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GaolInput(props) {

	const [enteredGoalText, setEnteredGoalText] = useState('');

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput placeholder='Your course goal!' onChangeText={goalInputHandler} style={styles.textInput} value={enteredGoalText} />
			<Button title='Add Goal' onPress={addGoalHandler} />
		</View>
	);

}

export default GaolInput;

const styles = StyleSheet.create({
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
	}
});