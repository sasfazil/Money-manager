import "./index.css";

const MoneyDetails = (props) => {
  const { aboutAccount } = props;
  const { balance, income, expenses } = aboutAccount;

  return (
    <>
      <li className="list-container first-list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="first-list-img list-img"
        />
        <div className="details-list">
          <p className="about">Your Balance</p>
          <p className="about-amount" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="list-container sec-list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="sec-list-img list-img"
        />
        <div className="details-list">
          <p className="about">Your Income</p>
          <p className="about-amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="list-container third-list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="third-list-img list-img"
        />
        <div className="details-list">
          <p className="about">Your Expenses</p>
          <p className="about-amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </>
  );
};

export default MoneyDetails;
