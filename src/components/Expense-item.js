import "./Expenseitem.css";

function Expenseitem() {
  const expenseDate= new Date(2021, 2, 21);
  const expenseTitle='Car Insuranve';
  const expenseAmount= 290;
  
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default Expenseitem;
