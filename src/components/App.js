import React from "react";
import "../App.css";
import LogIn from "./LogIn";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import ErrorPage from "./ErrorPage";
import Nav from "./Nav";
import Header from './Header'
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "./../actions/shared";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        const { authedUser, loading } = this.props;
        if (authedUser === null) {
            return <Route  component={LogIn} />;
        }
        return (
            <div className="App">
                {loading ? (
                    <LoadingBar />
                ) : (
                    <React.Fragment>
                        <Header />
                        <Nav />
                        <Container className="top">
                            <Switch>
                                <Route path="/" exact component={Dashboard} />
                                <Route
                                    path="/question/:id"
                                    component={Question}
                                />
                                <Route
                                    path="/new-question"
                                    component={NewQuestion}
                                />
                                <Route
                                    path="/leaderboard"
                                    component={LeaderBoard}
                                />
                                <Route
                                    path="/not-found"
                                    component={ErrorPage}
                                />
                            </Switch>
                        </Container>
                    </React.Fragment>
                )}
            </div>
        );
    }
}
const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        loading: users === null,
    };
};
export default connect(mapStateToProps)(App);
/* 
      <h1>Nav</h1>
      <h1 >Dashboard</h1>
        <ul>
          <li>
            <h2>unanswered</h2>
          </li>
          <li>
            <h2>answered</h2>
          </li>
        </ul> */
