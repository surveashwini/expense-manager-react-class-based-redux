import React from "react";
import "./Add.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { addExpense } from "../../Actions/addExpense";
import { editExpense } from "../../Actions/editExpense";

class Add extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      expenseId: "0",
      expenseName: "",
      expenseAmt: "",
      expenseDate: "",
      showStatusMsg: false,
    };
  }

  componentDidMount = () => {
    if (this.props.editItem) {
      let itemId = this.props.editItem.expenseId;
      let item = this.props.data.filter(
        (item) => item.expenseId === Number(itemId)
      );
      let itemIndex = this.props.data.findIndex(
        (item) => item.expenseId === Number(itemId)
      );
      console.log(this.props.data, item);
      this.setState({
        expenseName: this.props.data[itemIndex].expenseName,
        expenseAmt: this.props.data[itemIndex].expenseAmt,
        expenseDate: this.props.data[itemIndex].expenseDate,
      });
    }
  };

  showSuccess = () => {
    console.log(this.state);
    this.setState({
      showStatusMsg: true,
    });
    this.hideSuccess();
  };

  hideSuccess = () => {
    setTimeout(() => {
      this.setState({
        showStatusMsg: false,
      });
      this.props.history.push("/report");
    }, 2500);
  };

  submitForm = (event) => {
    const { expenseName, expenseAmt, expenseDate } = this.state;
    if (this.props.editItem) {
      this.props.editExpense({
        expenseId: this.props.editItem.expenseId,
        expenseName,
        expenseAmt,
        expenseDate,
      });
      this.props.history.push("/report");
    } else {
      this.props.addExpense({ expenseName, expenseAmt, expenseDate });
      this.showSuccess();
    }

    event.preventDefault();
  };

  handleChange = (event) => {
    switch (event.target.className) {
      case "expense-date":
        this.setState({
          expenseDate: event.target.value,
        });
        break;
      case "expense-name":
        this.setState({
          expenseName: event.target.value,
        });
        break;
      case "expense-amt":
        this.setState({
          expenseAmt: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="add-expense">
          <header className="add-header">
            {this.props.editItem ? "Edit Expense" : "Add Expenses"}
          </header>
          <form className="add-form" onSubmit={this.submitForm}>
            <input
              className="expense-name"
              placeholder="Enter expense name"
              value={this.state.expenseName}
              onChange={this.handleChange}
              type="text"
            />
            <input
              className="expense-amt"
              placeholder="Enter expense amount"
              value={this.state.expenseAmt}
              onChange={this.handleChange}
              type="text"
            />
            <input
              className="expense-date"
              value={this.state.expenseDate}
              onChange={this.handleChange}
              type="date"
            />
            <input className="add-submit" type="submit" value="Submit" />
          </form>
        </section>

        <section
          className={this.state.showStatusMsg ? "showStatus" : "hideStatus"}
        >
          {this.state.showStatusMsg ? (
            <span>Your record is successfully submitted.</span>
          ) : (
            ""
          )}
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  addExpense,
  editExpense,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Add);
