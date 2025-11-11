import Login from "@/components/Login";
import { fireEvent, render } from "@testing-library/react-native";

test("Invalid input", () => {
  const originalLog = console.log;
  //   console.log = jest.fn((msg) => originalLog(msg));
  //   const mockFn = jest.fn((msg) => console.log(msg));
  const testFn = jest.fn();
  //   console.log(mockFn.mock.calls);
  const { getByText, debug } = render(<Login />);
//   debsug();
  fireEvent.press(getByText("Click Me"));
  //   expect(console.log).toHaveBeenCalledWith("Hello it is clicked");
});
