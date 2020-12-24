import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import voted from "./voted.svg";
import AnsweredQuestion from "./AnsweredQuestion";
import NotAnsweredQuestion from "./NotAnsweredQuestion";
import { handleSaveAnswer } from "../actions/answers";

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
            question.optionOne.votes.includes(authedUser) ||
            question.optionTwo.votes.includes(authedUser)
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
        const totalVotes =
            question.optionOne.votes.length + question.optionTwo.votes.length;

        const OpOneVotes = question.optionOne.votes.length;
        const OpTwoVotes = question.optionTwo.votes.length;
        const onePercentage =
            OpOneVotes === 0 ? 0 : Math.round((OpOneVotes / totalVotes) * 100);
        const twoPercentage =
            OpTwoVotes === 0 ? 0 : Math.round((OpTwoVotes / totalVotes) * 100);
        const votedOpOne = question.optionOne.votes.includes(authedUser);
        const votedOpTwo = question.optionTwo.votes.includes(authedUser);
        // handle return

        return (
            <div>
                {noID && <Redirect to="/not-found" />}
                {this.state.hasVoted ? (
                    <AnsweredQuestion
                        name={users[question.author].name}
                        avatar={users[question.author].avatarURL}
                        firstOpStyle={votedOpOne ? "voted" : "firstOption"}
                        firstOpIconStyle={
                            votedOpOne ? "voted-icon" : "voted-icon-hidden"
                        }
                        voted={voted}
                        OpOneText={question.optionOne.text}
                        OpOnePercentage={onePercentage}
                        totalVotes={totalVotes}
                        OpOneVotes={OpOneVotes}
                        secOpStyle={votedOpTwo ? "voted" : "secondOption"}
                        secOpIconStyle={
                            votedOpTwo ? "voted-icon" : "voted-icon-hidden"
                        }
                        OpTwoText={question.optionTwo.text}
                        OpTwoPercentage={twoPercentage}
                        OpTwoVotes={OpTwoVotes}
                    />
                ) : (
                    <NotAnsweredQuestion
                        name={users[question.author].name}
                        avatar={users[question.author].avatarURL}
                        OpOneText={question.optionOne.text}
                        OpTwoText={question.optionTwo.text}
                        disabled={this.state.value.length === 0}
                        changeVal={this.changeVal}
                        makeSubmit={this.makeSubmit}
                    />
                )}
            </div>
        );
    }
}
const mapStateToProps = ({ users, authedUser, questions }, props) => {
    const { id } = props.match.params;
    const question = questions[id];
    if (!questions[id]) {
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
