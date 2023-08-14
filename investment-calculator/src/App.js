import { useState } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';
import Table from './Components/Table';

function App() {

  const [data, setData] = useState([]);
  const [investment, setInvestment] = useState(null);


  const calculateHandler = (userInput) => {
    console.log(userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.interest / 100;
    const duration = +userInput.duration;
    setInvestment(currentSavings);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution.toFixed(2),
      });
    }
    setData(yearlyData);
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table data={data} initialInvestment={investment} />
    </div>
  );
}

export default App;
