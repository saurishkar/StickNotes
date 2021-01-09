import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const ButtonView = ({ children, type, style, ...props }) => {
  const btnStyles = StyleSheet.flatten([ style, styles[type] ]);
  // return <Button style={btnStyles} {...props} />
  return <Button mode="contained" style={btnStyles} {...props}>
    {children}
  </Button> 
}

const styles = StyleSheet.create({
  // danger: {
  //   backgroundColor: "red",
  //   color: "white"
  // },
  // warning: {
  //   backgroundColor: "yellow",
  //   color: "black"
  // },
  // success: {
  //   backgroundColor: "green",
  //   color: "white"
  // },
  // primary: {
  //   backgroundColor: "blue",
  //   color: "white"
  // }
})

export default ButtonView;
