import Calculator from "./";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-test-renderer";

describe("Test Calculator", () => {
  it("render", () => {
    render(<Calculator />);
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });
  it("add", async () => {
    render(<Calculator />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const resultArea = screen.getByTestId("result");
    await act(() => {
      fireEvent.change(num1input, { target: { value: 10 } });
      fireEvent.change(num2input, { target: { value: 10 } });
      addButton.click();
    });
    expect(resultArea).toHaveTextContent("20");
  });
  it("subtract", async () => {
    render(<Calculator />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const subtractButton = screen.getByTestId("subtract");
    const resultArea = screen.getByTestId("result");
    await act(() => {
      fireEvent.change(num1input, { target: { value: 50 } });
      fireEvent.change(num2input, { target: { value: 10 } });
      subtractButton.click();
    });
    expect(resultArea).toHaveTextContent("40");
  });
  // it("multiplication", async () => {
  //   render(<Calculator />);
  //   const num1input = screen.getByTestId("num1");
  //   const num2input = screen.getByTestId("num2");
  //   const multiplyButton = screen.getByTestId("multiply");
  //   const resultArea = screen.getByTestId("result");
  //   fireEvent.change(num1input, { target: { value: 10 } });
  //   fireEvent.change(num2input, { target: { value: 10 } });
  //   await multiplyButton.click();
  //   expect(resultArea).toHaveTextContent("100");
  // });
  // it("divide", async () => {
  //   render(<Calculator />);
  //   const num1input = screen.getByTestId("num1");
  //   const num2input = screen.getByTestId("num2");
  //   const divideButton = screen.getByTestId("divide");
  //   const resultArea = screen.getByTestId("result");
  //   fireEvent.change(num1input, { target: { value: 100 } });
  //   fireEvent.change(num2input, { target: { value: 2 } });
  //   await divideButton.click();
  //   expect(resultArea).toHaveTextContent("50");
  // });
});
