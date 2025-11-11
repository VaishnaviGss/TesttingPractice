import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Login = () => {
  function handlePress1() {
    var min = 2;
    console.log("Function 1");
    handlePress2();
  }
  function handlePress2() {
    console.log("Function 2");
    handlePress3();
  }
  function handlePress3() {
    console.log("Function 3 called");
    testFn("hello");
  }
  function testFn(text: string) {}
  return (
    <View>
      <Text>Login</Text>
      <Button title="Click Me" onPress={handlePress1}></Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
