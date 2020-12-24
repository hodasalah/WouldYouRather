import React from "react";

const AnsweredQuestion = (props) => {
    return (
        <div className="answered">
            <h3 className="result-header">Asked By {props.name}</h3>
            <div className="result-div">
                <h4 className="result-div-header">Results</h4>
                <div className="result">
                    <div className="result-image-section">
                        <img
                            src={`../${props.avatar}`}
                            alt={`${props.name}'s avatar`}
                        />
                    </div>
                    <div className="result-quest-section">
                        <div className={props.firstOpStyle}>
                            <img
                                src={`${props.voted}`}
                                alt="voted-icon"
                                className={props.firstOpIconStyle}
                            />
                            <p>{props.OpOneText}</p>
                            <p>
                                <span>{props.OpOnePercentage}</span>{" "}
                                <span>{`${props.OpOneVotes} of ${props.totalVotes} total votes`}</span>
                            </p>
                        </div>
                        <div className={props.secOpStyle}>
                            <img
                                src={props.voted}
                                alt="voted-icon"
                                className={props.secOpIconStyle}
                            />
                            <p>{props.OpTwoText}</p>
                            <p>
                                <span>{props.OpTwoPercentage}</span>{" "}
                                <span>{`${props.OpTwoVotes} of ${props.totalVotes} total votes`}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnsweredQuestion;
