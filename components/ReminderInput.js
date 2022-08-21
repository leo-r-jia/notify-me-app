import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from 'react';

function ReminderInput(props) {
    const [enteredReminderText, setEnteredReminderText] = useState('');

    function reminderInputHandler(enteredText) {
        setEnteredReminderText(enteredText);
    };

    function addReminderHandler() {
        props.onAddReminder(enteredReminderText);
        setEnteredReminderText('');
    };

    return (
        <View>
            <TextInput
                style={styles.textBox}
                placeholder="Set an instant notification"
                onChangeText={reminderInputHandler}
                color='#1b263b'
                value={enteredReminderText}
            />
            <Button title="Set" color='#778da9'style={styles.button} onPress={addReminderHandler} />
        </View>
    );
}

export default ReminderInput;

const styles = StyleSheet.create({
    
    textBox: {
        height: 35,
        width: 300,
        color: '#1b263b',
        borderColor: '#415a77',
        borderWidth: 1,
        padding: 8
    },
})