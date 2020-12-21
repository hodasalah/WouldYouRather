import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter,  Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleSetAuthedUser } from "../actions/authedUser";

class Nav extends Component {
  handleSubmit = (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    dispatch(handleSetAuthedUser(null));
    this.props.history.push("/");
  };
  render() {
    const { users, authedUser } = this.props;
    return (
      <div className="nav-container">
        <Container className="flex">
          <h2 className="logo">WYR</h2>
          <ul className="navbar">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/newquestion">new Question</Link>
            </li>
            <li className="nav-link">
              <Link to="/leaderboard">LeaderBoard</Link>
            </li>
          </ul>
          <div className="user-info">
            <img
              src={`/${users[authedUser].avatarURL}`}
              alt={`avatar for ${users[authedUser].avatar}`}
              className="nav-avatar"
            />
            <p>{users[authedUser].name}</p>
            <button className="sign-out" onClick={this.handleSubmit}>
              Sign out
            </button>
          </div>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = ({ users, authedUser }) => {
  return {
    authedUser,
    users,
  };
};
export default withRouter(connect(mapStateToProps)(Nav));
