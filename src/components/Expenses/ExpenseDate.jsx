import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString(navigator.language, {
    month: "long",
  });
  const day = props.date.toLocaleString(navigator.language, { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="month-date___month">{month}</div>
      <div className="month-date___year">{year}</div>
      <div className="month-date___day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
