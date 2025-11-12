// import React from "react";
// import { Button, StyleSheet, Text, View } from "react-native";

// const Login = () => {
//   function handlePress1() {
//     var min = 2;
//     console.log("Function 1");
//     handlePress2();
//   }
//   function handlePress2() {
//     console.log("Function 2");
//     handlePress3();
//   }
//   function handlePress3() {
//     console.log("Function 3 called");
//     testFn("hello");
//   }
//   function testFn(text: string) {}
//   return (
//     <View>
//       <Text>Login</Text>
//       <Button title="Click Me" onPress={handlePress1}></Button>
//     </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({});

import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface LoginScreenProps {}
const Login: React.FC<LoginScreenProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fileds");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (email === "test@example.com" && password === "password123") {
        Alert.alert("Success", "Login successful!");
      } else {
        Alert.alert("Error", "Invalid credentials");
      }
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        testID="email-input"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        testID="password-input"
      />
      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        disabled={isLoading}
        onPress={handleLogin}
        testID="login-button"
      >
        <Text style={styles.buttonText}>{isLoading ? "Loading" : "Login"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
