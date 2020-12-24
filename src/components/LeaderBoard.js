import React, { Component } from "react";
import { connect } from "react-redux";

export class LeaderBoard extends Component {
    render() {
        console.log(this.props.users);
        const { users } = this.props;
        return (
            <div>
                {Object.keys(users).map((uid) => {
                    const answers = Object.keys(users[uid].answers).length;
                    const total = answers + users[uid].questions.length;
                    return (
                        <div key={uid} className="leaderboard-div">
                            <h4 className="leaderboard-header">
                                {users[uid].name}
                            </h4>
                            <hr />
                            <div className="leaderboard-inner">
                                <div className="question-image-section">
                                    <img
                                        src={users[uid].avatarURL}
                                        alt={`${users[uid].name}'s avatar`}
                                    />
                                </div>
                                <div>
                                    <strong>
                                        <p style={{ fontSize: "20px" }}>
                                            Answered Questions :
                                            <span>
                                                {"  "}
                                                {answers}
                                            </span>
                                        </p>
                                    </strong>
                                    <strong>
                                        <p>
                                            Questions :
                                            <span>
                                                {"  "}
                                                {users[uid].questions.length}
                                            </span>
                                        </p>
                                    </strong>
                                </div>
                                <div className="score">
                                    <strong></strong>
                                    <p>{total}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
const mapStateToProps = ({ users }) => {
    return {
        users,
    };
};
export default connect(mapStateToProps)(LeaderBoard);
