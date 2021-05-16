import React from "react";
import "./Login.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { authorizeUser } from "../../Actions/authorizeUser";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  // componentDidUpdate = (prevProps) => {
  //   console.log(prevPros)
  // }

  validateCredentials = (event) => {
    if (
      this.state.username === "test123" &&
      this.state.password === "#password123"
    ) {
      console.log("login", this.state);
      // this.setState({
      //   isAuthenticated: true
      // }

      // ,()=>{
      //   console.log('login',this.state);
      //   this.props.history.push('/add');
      //   //event.preventDefault();
      // });
      this.props.authorizeUser(true);
      this.props.history.push("/add");
      event.preventDefault();
    }
  };

  handleChange = (event) => {
    switch (event.target.className) {
      case "user-name":
        this.setState({
          username: event.target.value,
        });
        break;
      case "password":
        this.setState({
          password: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="login">
          <header className="login-header">Login</header>
          <form className="login-form" onSubmit={this.validateCredentials}>
            <input
              className="user-name"
              placeholder="Enter user name"
              value={this.state.userName}
              onChange={this.handleChange}
              type="text"
            />
            <input
              className="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            <input className="login-submit" type="submit" value="Submit" />
          </form>
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  authorizeUser,
};

export default compose(withRouter, connect(null, mapDispatchToProps))(Login);
