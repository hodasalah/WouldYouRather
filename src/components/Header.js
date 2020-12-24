import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { handleSetAuthedUser } from "../actions/authedUser";

class Header extends Component {
  handleSubmit = (e) => {
    const { dispatch ,history } = this.props;
    e.preventDefault();
    dispatch(handleSetAuthedUser(null));
    history.push("/");
  };
  render() {
    const { users, authedUser } = this.props;
    return (
      <div className="nav-container">
        <Container className="flex">
          <h2 className="logo">W<span style={{color:'rgb(220, 0, 78)'}}>Y</span>R</h2>
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
export default withRouter(connect(mapStateToProps)(Header));
