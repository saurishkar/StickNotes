import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Note from "../components/Note";

import useLocalStorage from "../hooks/useLocalStorage";

const Notes = () => {
  const [notes, updateNotes] = useState({ data: {}, order: [] });
  const [getStorageItem, setStorageItem] = useLocalStorage();
  const addNote = () => {
    updateNotes(({ data: prevData, order: prevOrder }) => {
      const newNoteId = `Note_${Date.now()}`;
      return {
        data: {
          ...prevData,
          [newNoteId]: {
            id: newNoteId,
            title: `Note ${prevOrder.length + 1}`,
            description: "This is a note"
          },
        },
        order: [ newNoteId, ...prevOrder ]
      };
    });
  };
  const deleteNote = (noteId) => {
    updateNotes(({ data: prevData, order: prevOrder }) => {
      delete prevData[noteId];
      const index = prevOrder.findIndex((id) => id === noteId);
      const newOrder = [ ...prevOrder.slice(0, index), ...prevOrder.slice(index + 1) ];
      return { data: prevData, order: newOrder };
    });
  };

  useEffect(() => {
    updateNotes(getStorageItem("notes"));
  }, []);
  useEffect(() => {
    setStorageItem("notes", notes);
  });
  return <View style={styles.notes}>
    <Button title="Create a Note" onPress={addNote} style={styles.createBtn} />
    <View style={styles.noteList}>{notes.order.length > 0 ? notes.order.map((noteId) => {
        const note = notes.data[noteId];
        return <Note {...note} key={note.title} deleteNote={deleteNote} />
      }) :
      <Text>You don't have any notes yet</Text>}
    </View>
  </View>
};

const styles = StyleSheet.create({
  notes: {
    width: "100%",
    margin: "auto"
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

export default Notes;