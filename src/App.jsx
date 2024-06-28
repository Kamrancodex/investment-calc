import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChnage = (inputIdentifier, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChnage={handleChnage} />
      <Results input={userInput} />
    </>
  );
}

export default App;
