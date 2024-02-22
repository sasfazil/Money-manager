import "./index.css";

const TransactionItem = (props) => {
  const { transactions, onDeleteList } = props;
  const { title, amount, type, id } = transactions;
  const deleteList = () => {
    onDeleteList(id);
  };
  return (
    <li className="show-transaction-list">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <div className="del-list">
        <p>{type}</p>
        <button
          type="submit"
          className="del-btn"
          data-testid="delete"
          onClick={deleteList}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="del-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
