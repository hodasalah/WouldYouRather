import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleSaveAnswer } from "../actions/answers";
import QuestionPoll from "./QuestionPoll";

export class Question extends Component {
    state = {
        value: "",
        hasVoted: false,
    };
    componentDidMount() {
        this.handleHasVoted();
    }
    handleHasVoted = () => {
        const { question, authedUser } = this.props;
        if (
            (question && question.optionOne.votes.includes(authedUser)) ||
            (question && question.optionTwo.votes.includes(authedUser))
        ) {
            this.setState({ hasVoted: true });
        }
    };
    changeVal = (val) => {
        this.setState({ value: val });
    };
    makeSubmit = () => {
        const { id, authedUser, dispatch } = this.props;
        const answer = this.state.value;
        dispatch(handleSaveAnswer({ authedUser, id, answer }));
        this.setState({ hasVoted: true });
    };

    render() {
        // some variables
        const { question, users, authedUser, noID } = this.props;

        // handle return
        if (noID === true) {
            return <Redirect to="/not-found" />;
        } else {
            return (
                <QuestionPoll
                    value={this.state.value}
                    hasVoted={this.state.hasVoted}
                    users={users}
                    question={question}
                    authedUser={authedUser}
                    changeVal={this.changeVal}
                    makeSubmit={this.makeSubmit}
                />
            );
        }
    }
}
const mapStateToProps = ({ users, authedUser, questions }, props) => {
    const { id } = props.match.params;
    const question = questions[id];
    if (typeof question === 'undefined') {
        return {
            noID: true,
        };
    }
    return {
        users,
        authedUser,
        id,
        question: question ? question : null,
    };
};

export default connect(mapStateToProps)(Question);
