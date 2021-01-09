import React from "react";
import { Button, StyleSheet } from "react-native";

const ButtonView = ({ type, style, ...props }) => {
  const btnStyles = StyleSheet.flatten([ style, styles[type] ]);
  return <Button style={btnStyles} {...props} /> 
}

const styles = StyleSheet.create({
  danger: {
    backgroundColor: "red",
    fontColor: "white"
  },
  warning: {
    backgroundColor: "yellow",
    fontColor: "black"
  },
  success: {
    backgroundColor: "green",
    fontColor: "white"
  },
  primary: {
    backgroundColor: "blue",
    fontColor: "white"
  }
})

export default ButtonView;
