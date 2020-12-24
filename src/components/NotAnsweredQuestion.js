import React from "react";

import { Button } from "@material-ui/core";

const NotAnsweredQuestion = (props) => {
    const handleChange = (val) => {
        props.changeVal(val);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.makeSubmit();
    };
    return (
        <div>
            <h3 className="question-header">{props.name} wants to know</h3>
            <div className="question">
                <div className="question-image-section">
                    <img
                        src={`../${props.avatar}`}
                        alt={`${props.name}'s avatar`}
                    />
                </div>
                <div className="question-quest-section">
                    <h4>Would you Rather?</h4>
                    <form onSubmit={handleSubmit}>
                        <label className="question-options">
                            <input
                                type="radio"
                                name="options"
                                value="optionOne"
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            {props.OpOneText}
                        </label>
                        <label className="question-options">
                            <input
                                type="radio"
                                name="options"
                                value="optionTwo"
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            {props.OpTwoText}
                        </label>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            disabled={props.disabled}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NotAnsweredQuestion;
