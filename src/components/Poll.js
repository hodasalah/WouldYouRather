import React from "react";
import { Link } from "react-router-dom";

const Poll = (props) => {
    return (
        <div className="poll">
            <div className="poll-image-section">
                <h4>{props.name} wants to know</h4>
                <img src={props.avatar} alt={`${props.name}'s avatar`} />
            </div>
            <div className="poll-quest-section">
                <h4>Would you rather?</h4>
                <p>{props.firstOption}</p>
                <p> OR </p>
                <p>{props.secondOption}</p>
                <Link to={`/questions/${props.id}`}>
                    <button className="primary-btn">{props.content}</button>
                </Link>
            </div>
        </div>
    );
};

export default Poll;
