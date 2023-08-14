import React from "react";

function Table(props) {
  return (
    <>
      {props.data.length > 0 ? (
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((i, index) => (
              <tr key={index}>
                <td>{i.year}</td>
                <td>${i.savingsEndOfYear}</td>
                <td>${i.yearlyInterest}</td>
                <td>$
                  {(
                    i.savingsEndOfYear -
                    props.initialInvestment -
                    i.yearlyContribution * i.year
                  ).toFixed(2)}
                </td>
                <td>$
                  {props.initialInvestment + i.yearlyContribution * i.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 style={{ textAlign: "center" }}>No investment calculated yet!</h4>
      )}
    </>
  );
}

export default Table;
