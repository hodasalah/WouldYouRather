import React from "react";
import voted from "./voted.svg";
import AnsweredQuestion from "./AnsweredQuestion";
import NotAnsweredQuestion from "./NotAnsweredQuestion";

const QuestionPoll = (props) => {
    const { question, users, authedUser ,hasVoted ,value ,makeSubmit ,changeVal} = props;
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
    return (
        <div>
            {hasVoted ? (
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
                    disabled={value.length === 0}
                    changeVal={changeVal}
                    makeSubmit={makeSubmit}
                />
            )}
        </div>
    );
};

export default QuestionPoll;
