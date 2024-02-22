import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import MoneyDetails from "../MoneyDetails";
import TransactionItem from "../TransactionItem";

import "./index.css";

const transactionTypeOptions = [
  {
    optionId: "INCOME",
    displayText: "Income",
  },
  {
    optionId: "EXPENSES",
    displayText: "Expenses",
  },
];

class MoneyManager extends Component {
  state = {
    transactionOpt: transactionTypeOptions,
    transactions: [],
    title: "",
    amount: "",
    type: "Income",
  };

  onDeleteList = (id) => {
    this.setState((prevVal) => ({
      transactions: prevVal.transactions.filter((each) => each.id !== id),
    }));
  };

  onTransactions = () => {
    const { transactions } = this.state;
    let incomeAmt = 0;
    let expenceAmt = 0;
    let total = 0;
    if (transactions.length !== 0) {
      transactions.forEach((each) => {
        if (each.type === "Income") {
          incomeAmt += parseInt(each.amount);
        } else if (each.type === "Expenses") {
          expenceAmt += parseInt(each.amount);
        }
      });
    }
    total = incomeAmt - expenceAmt;
    return {
      balance: total,
      income: incomeAmt,
      expenses: expenceAmt,
    };
  };

  submitForm = (event) => {
    event.preventDefault();
    const { title, amount, type } = this.state;
    const createNewTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    };
    this.setState((prevVal) => ({
      transactions: [...prevVal.transactions, createNewTransaction],
      title: "",
      amount: "",
      type: "Income",
    }));
  };

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  onAmountChange = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  onTypeChange = (event) => {
    const selectVal = event.target.value === "INCOME" ? "Income" : "Expenses";
    this.setState({
      type: selectVal,
    });
  };

  render() {
    const { transactionOpt, transactions } = this.state;
    const { title, amount } = this.state;
    const aboutAccount = this.onTransactions();

    return (
      <div className="main-container">
        <div className="first-container">
          <h1 className="main-heading">Hi,Richard</h1>
          <p className="main-para">
            Welcome back to your
            <span className="main-para-color"> Money Manager</span>
          </p>
        </div>
        <ul className="sec-list-container">
          <MoneyDetails aboutAccount={aboutAccount} />
        </ul>
        <div className="third-container">
          <div className="add-transaction">
            <h1 className="transaction-heading">Add Transaction</h1>

            <form onSubmit={this.submitForm}>
              <label htmlFor="titleId" className="title">
                TITLE
              </label>
              <input
                type="text"
                className="title-input"
                placeholder="TITLE"
                onChange={this.onTitleChange}
                value={title}
                id="titleId"
              />
              <label htmlFor="amountId" className="amount">
                AMOUNT
              </label>
              <input
                type="text"
                className="amount-input"
                placeholder="AMOUNT"
                onChange={this.onAmountChange}
                value={amount}
                id="amountId"
              />
              <p className="type">TYPE</p>
              <select
                className="select-transaction"
                onClick={this.onTypeChange}
              >
                {transactionOpt.map((each) => {
                  if (each.optionId === "INCOME") {
                    return (
                      <option value={each.optionId} selected>
                        {each.displayText}
                      </option>
                    );
                  }
                  return (
                    <option value={each.optionId}>{each.displayText}</option>
                  );
                })}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="show-transaction">
            <h1 className="transaction-heading">History</h1>
            <div className="show-transaction-container">
              <div className="show-transaction-list-head">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
              <ul className="show-transaction-container-ul">
                {transactions.map((each) => (
                  <TransactionItem
                    key={each.id}
                    transactions={each}
                    onDeleteList={this.onDeleteList}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyManager;
