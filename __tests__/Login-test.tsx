import Login from "@/components/Login";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import { Alert } from "react-native";
jest.spyOn(Alert, "alert");
describe("LoginScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders correclty with all elements", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<Login />);
    expect(getByText("Login Screen")).toBeTruthy();
    expect(getByPlaceholderText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(getByTestId("login-button")).toBeTruthy();
  });
  it("Handles Email input carefully", () => {
    const { getByPlaceholderText } = render(<Login />);
    const emailInput = getByPlaceholderText("Email");
    fireEvent.changeText(emailInput, "test@example.com");
    expect(emailInput.props.value).toBe("test@example.com");
  });
  it("Handles password input carefully", () => {
    const { getByPlaceholderText } = render(<Login />);
    const emailInput = getByPlaceholderText("Password");
    fireEvent.changeText(emailInput, "password123");
    expect(emailInput.props.value).toBe("password123");
  });
  it("show alert for empty fileds", () => {
    const { getByTestId } = render(<Login />);
    const loginButton = getByTestId("login-button");
    fireEvent.press(loginButton);
    expect(Alert.alert).toHaveBeenCalledWith(
      "Error",
      "Please fill in all fileds"
    );
  });
  it("show alert for invalid email", () => {
    const { getByTestId, getByPlaceholderText } = render(<Login />);
    const loginButton = getByTestId("login-button");
    fireEvent.changeText(getByPlaceholderText("Email"), "invalid-email");
    fireEvent.changeText(getByPlaceholderText("Password"), "password123");
    fireEvent.press(loginButton);
    expect(Alert.alert).toHaveBeenCalledWith(
      "Error",
      "Please enter a valid email"
    );
  });
  it("show alert for invalid password", () => {
    const { getByTestId, getByPlaceholderText } = render(<Login />);
    const loginButton = getByTestId("login-button");
    fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "123");
    fireEvent.press(loginButton);
    expect(Alert.alert).toHaveBeenCalledWith(
      "Error",
      "Password must be at least 6 characters"
    );
  });
  it("shows success alert for valid credentials", async () => {
    const { getByPlaceholderText, getByTestId } = render(<Login />);
    fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "password123");
    fireEvent.press(getByTestId("login-button"));
    await waitFor(
      () => {
        expect(Alert.alert).toHaveBeenCalledWith(
          "Success",
          "Login successful!"
        );
      },
      { timeout: 3000 }
    );
  });
  it("shows failure alert for valid credentials", async () => {
    const { getByPlaceholderText, getByTestId } = render(<Login />);
    fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "passwor123");
    fireEvent.press(getByTestId("login-button"));
    await waitFor(
      () => {
        expect(Alert.alert).toHaveBeenCalledWith(
          "Error",
          "Invalid credentials"
        );
      },
      { timeout: 3000 }
    );
  });
});
