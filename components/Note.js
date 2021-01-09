import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";

import ButtonView from "./buttons/ButtonView";

const Note = ({ id, title, description, deleteNote, markCompleteNote, archiveNote }) => {
  return <View style={styles.noteContainer}>
    <Card>
      <Card.Title title={title} />
      <Card.Content>
        <Paragraph>
          {description}
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <ButtonView type="primary" onPress={() => console.log("complete")}><small>Mark as complete</small></ButtonView>
        <ButtonView type="danger" onPress={() => deleteNote(id)}><small>Delete</small></ButtonView>
        <ButtonView type="warning" onPress={() => console.log("archived")}><small>Archive</small></ButtonView>
      </Card.Actions>
    </Card>
  </View>
}

const styles = StyleSheet.create({
  noteContainer: {
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
