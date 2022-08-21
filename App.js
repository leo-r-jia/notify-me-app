import { StyleSheet, Text, View, Button, FlatList, Modal } from 'react-native';
import { useState } from 'react';
//import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

import ReminderInput from './components/ReminderInput';
import PastReminders from './components/PastReminders';

export default function App() {

  const [reminders, setReminders] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addReminderHandler(enteredReminderText) {
    setReminders((currentReminders) => [
      ...currentReminders,
      { text: enteredReminderText, id: Math.random().toString() }
    ]);
  };

  function deleteReminderHandler(id) {
    setReminders(currentReminders => {
      return currentReminders.filter((reminder) => reminder.id !== id);
    });
  };

  function showPastRemindersHandler() {
    setModalIsVisible(true);
  }

  function closePastRemindersHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.header}>Notify Me</Text>
        <Text style={styles.subheader}>By Leo Jia</Text>
        <ReminderInput onAddReminder={addReminderHandler} />
      </View>
      <View style={styles.reminderContainer}>
        <Button
          title="Past Reminders"
          style={{ fontSize: 18 }}
          color="#778da9"
          onPress={showPastRemindersHandler}
        />
        <Modal visible={modalIsVisible} animationType="slide">
          <View style ={styles.modalContainer}>
            <Button 
            title="Close" 
            color="#778da9"
            onPress={closePastRemindersHandler} />
            <FlatList
              style={styles.flatlistContainer}
              data={reminders}
              renderItem={(itemData) => {
                return (
                  <PastReminders
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteReminderHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              alwaysBounceVertical={false}
            />
          </View>
        </Modal>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#e0e1dd",
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    marginTop: 160,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50
  },
  subheader:{
    marginBottom: 15, 
    color:'#415a77', 
    fontWeight:'600' 
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: "#415a77"
  },
  reminderContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  flatlistContainer: {
    width: 80,
  },
  modalContainer: {
    padding: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});
