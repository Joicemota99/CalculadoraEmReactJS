import { Container, Content, Row } from "./styles";
import { Input } from "./components/Input/index.js";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  //Estado para limpar e inserir numeros que está vindo do meu input
  const [currentNumber, setCurrentNumber] = useState("0");

  // Estado para somar os numeros
  const [firstNumber, setFirstNumber] = useState("0");

  // Estado para somar os numeros
  const [operation, setOperation] = useState("");

  // Botão para somar
  const handleSumNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("=");
    }
  };

  // Botão para subtrair
  const handleRemNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum =
        parseFloat(Number(firstNumber)) - parseFloat(Number(currentNumber));
      setCurrentNumber(String(sum));
      setOperation("=");
    }
  };

  // Botão para igualar
  const handleEqualNumber = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumber();
          break;
        case "-":
          handleRemNumber();
          break;
        case "%":
          handlePorcentNumber();
          break;

        case "X":
          handleMultiNumber();
          break;

        case "/":
          handleDiviNumber();
          break;
        default:
          break;
      }
    }
  };

  // Botão porcentagem
  const handlePorcentNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("%");
    } else {
      const sum =
        (parseFloat(Number(firstNumber)) + parseFloat(Number(currentNumber))) /
        100;
      setCurrentNumber(String(sum));
      setOperation("=");
    }
  };

  // Multiplicar
  const handleMultiNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("X");
    } else {
      const sum =
        parseFloat(Number(firstNumber)) * parseFloat(Number(currentNumber));
      setCurrentNumber(String(sum));
      setOperation("=");
    }
  };

  // Dividir
  const handleDiviNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum =
        parseFloat(Number(firstNumber)) / parseFloat(Number(currentNumber));
      setCurrentNumber(String(sum));
      setOperation("=");
    }
  };

  // Botão para limpar os números
  const handleOnClear = () => {
    setCurrentNumber("0");
    setOperation("");
  };

  // Botão para adicionar os números
  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? " " : prev}${num}`);
  };

  return (
    <>
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <Button label="AC" onClick={handleOnClear} />
            <Button label="%" onClick={handlePorcentNumber} />
            <Button label="/" onClick={handleAddNumber} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button label="X" onClick={handleMultiNumber} />
          </Row>
          <Row>
            <Button label="6" onClick={() => handleAddNumber("6")} />
            <Button label="5" onClick={() => handleAddNumber("5")} />
            <Button label="4" onClick={() => handleAddNumber("4")} />
            <Button label="-" onClick={handleRemNumber} />
          </Row>
          <Row>
            <Button label="3" onClick={() => handleAddNumber("3")} />
            <Button label="2" onClick={() => handleAddNumber("2")} />
            <Button label="1" onClick={() => handleAddNumber("1")} />
            <Button label="+" onClick={handleSumNumber} />
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber("0")} />
            <Button label="," onClick={() => handleAddNumber(",")} />
            <Button label="=" onClick={handleEqualNumber} />
          </Row>
        </Content>
      </Container>
    </>
  );
};

export default App;
