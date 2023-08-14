import React, { useState } from "react";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [interest, setInterest] = useState("");
  const [duration, setDuration] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate({currentSavings,yearlySavings,interest, duration});
  };

  const restHandler = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setInterest("");
    setDuration("");
  };
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(e) => setCurrentSavings(e.target.value)}
              value={currentSavings}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(e) => setYearlySavings(e.target.value)}
              value={yearlySavings}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(e) => setInterest(e.target.value)}
              value={interest}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={restHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default Form;
