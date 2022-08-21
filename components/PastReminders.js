import { StyleSheet, Text, View, Pressable } from "react-native";

function PastReminders(props) {

    return (
        <Pressable 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=> {styles.pressedItem}  }
        >
            <View style={styles.reminderItems}>
                <Text>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default PastReminders;

const styles = StyleSheet.create({
    reminderItems: {
        margin: 2,
        padding: 1,
        alignItems: 'center'
    },
    pressedItem:{
        opacity: 0.5
    }
});