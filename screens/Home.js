import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Note from "../components/Note";

const Home = () => {
  const [notes, updateNotes] = React.useState([]);
  const newNote = () => updateNotes([{ title: `Note ${notes.length + 1}`, description: "This is a note "}, ...notes ]);
  return <View style={styles.home}>
    <Button title="Create a Note" onPress={newNote} style={styles.createBtn} />
    <View style={styles.noteList}>{notes.length > 0 ? notes.map((note) => (
      <Note {...note} key={note.title} />)) :
      <Text>You don't have any notes yet</Text>}
    </View>
  </View>
};

const styles = StyleSheet.create({
  home: {
    width: "100%"
  },
  noteList: {
    display: "inline-flex",
    maxWidth: "100%"
  },
  createBtn: {
    display: "block",
    maxWidth: "40px"
  }
})

export default Home;