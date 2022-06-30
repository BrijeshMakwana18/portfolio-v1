import { useState } from "react";
import { Container, Result, Input, Button } from "./styles.js";

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };

  const subtract = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };

  const multiply = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };

  const divide = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };

  return (
    <Container>
      <Result data-testid="result">{result}</Result>
      <Input
        type="number"
        data-testid="num1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <Input
        type="number"
        data-testid="num2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      {/* <div> */}
      <Button onClick={add} data-testid="add">
        +
      </Button>
      <Button onClick={subtract} data-testid="subtract">
        -
      </Button>
      <Button onClick={multiply} data-testid="multiply">
        *
      </Button>
      <Button onClick={divide} data-testid="divide">
        /
      </Button>
      {/* </div> */}
    </Container>
  );
}
