import InputField from "./InputField";

function UserInput({ userInput, handleChnage }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          label="Initial Investment"
          name="initialInvestment"
          handleChnage={handleChnage}
          value={userInput}
        />
        <InputField
          label="Annual Investment"
          name="annualInvestment"
          handleChnage={handleChnage}
          value={userInput}
        />
      </div>
      <div className="input-group">
        <InputField
          label="Expected Return"
          name="expectedReturn"
          handleChnage={handleChnage}
          value={userInput}
        />
        <InputField
          label="Duration"
          name="duration"
          handleChnage={handleChnage}
          value={userInput}
        />
      </div>
    </section>
  );
}

export default UserInput;
