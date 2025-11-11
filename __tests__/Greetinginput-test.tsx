import GreetingInput from "@/components/GreetingInput";
import { render } from "@testing-library/react-native";

test("renders Greeting text", () => {
  const { getByText, debug } = render(<GreetingInput />);
  //   debug();
  //   console.log(getByText("GreetingInput"));
  const textElement = getByText("GreetingInput");
  expect("Hello").toBeTruthy();
});
