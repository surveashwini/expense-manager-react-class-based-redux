import React from "react";
import "./Report.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { deleteExpense } from "../../Actions/deleteExpense";

class Report extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  delete = (deleteItem) => {
    this.props.deleteExpense(deleteItem);
    if (this.props.data.length > 1) {
      this.props.history.push("/report");
    } else {
      this.props.history.push("/add");
    }
  };

  edit = (editItem) => {
    this.props.history.push("/edit/" + editItem.expenseId);
  };

  render() {
    const gridHeadings = () => {
      return (
        <React.Fragment>
          <div className="grid-item grid-headings">
            <div>{"Expense Name"}</div>
          </div>
          <div className="grid-item grid-headings">
            <div>{"Expense Amount"}</div>
          </div>
          <div className="grid-item grid-headings">
            <div>{"Expense Date"}</div>
          </div>
          <div className="grid-item grid-headings">
            <div>{"Actions"}</div>
          </div>
        </React.Fragment>
      );
    };
    const gridItems = this.props.data.map((item) => {
      console.log(item.expenseId);
      return (
        <React.Fragment key={item.expenseName}>
          <div className="grid-item">
            <div>{item.expenseName}</div>
          </div>
          <div className="grid-item">
            <div>{item.expenseAmt}</div>
          </div>
          <div className="grid-item">
            <div>{item.expenseDate}</div>
          </div>
          <div className="grid-item">
            <div>
              <button className="editButton" onClick={() => this.edit(item)}>
                <i className="fa fa-edit"></i>
              </button>
            </div>
            <div>
              <button
                className="deleteButton"
                onClick={() => this.delete(item)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        <section className="report-expense">
          <header className="report-header">Expense Report</header>
          <section className="grid-container">
            {gridHeadings()}
            {gridItems}
          </section>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  deleteExpense,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Report);
