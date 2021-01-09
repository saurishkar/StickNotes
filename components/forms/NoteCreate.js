import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonView from "../buttons/ButtonView";

export default NoteCreate = ({ onSubmit }) => {
  const [title, handleTitleChange] = React.useState("");
  const [description, handleDescriptionChange] = React.useState("");
  return <View style={styles.form}>
    <Text style={styles.formTitle}>Create a new note</Text>
    <TextInput placeholder="My new note" onChangeText={handleTitleChange} value={title} style={styles.formField} />
    <TextInput placeholder="A description for the note" onChangeText={handleDescriptionChange} value={description} style={styles.formField} />
    <ButtonView onClick={() => onSubmit({ title, description })}>Save</ButtonView>
  </View>
}

const styles = StyleSheet.create({
  form: {
    padding: "10px",
  },
  formTitle: {
    fontWeight: "bold",
    marginBottom: "5px"
  },
  formField: {
    display: "block"
  }
});