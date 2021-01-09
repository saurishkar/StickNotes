import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import ButtonView from "./buttons/ButtonView";

const Note = ({ title, description, deleteNote, markCompleteNote, archiveNote }) => {
  return <View style={styles.noteContainer}>
    <View style={styles.noteBody}>
      <Text style={styles.noteTitle}>{title}</Text>
      <Text style={styles.noteDescription}><i>{description}</i></Text>
    </View>
    <View style={styles.noteActions}>
      <ButtonView title="Mark as complete" type="primary" onPress={markCompleteNote} />
      <ButtonView title="Delete" type="danger" onPress={deleteNote} />
      <ButtonView title="Archive" type="warning" onPress={archiveNote} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  noteContainer: {
    border: "1px solid black",
    padding: "5px",
    margin: "20px",
  },
  noteBody: {
    padding: "5px"
  },
  noteActions: {
    padding: "5px",
    display: "flex",
    flexDirection: "row"
  },
  noteTitle: {
    fontWeight: "bold",
    display: "block"
  },
  noteDescription: {
    fontStyle: "",
    display: "block"
  }
});

export default Note;
