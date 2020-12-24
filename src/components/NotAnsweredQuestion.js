import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
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
                        <FormControl component="fieldset">
                            <RadioGroup className="radioBtns">
                                <FormControlLabel
                                    value="optionOne"
                                    control={<Radio />}
                                    label={props.OpOneText}
                                    onChange={(e) =>
                                        handleChange(e.target.value)
                                    }
                                />
                                <FormControlLabel
                                    value="optionTwo"
                                    control={<Radio />}
                                    label={props.OpTwoText}
                                    onChange={(e) =>
                                        handleChange(e.target.value)
                                    }
                                />
                            </RadioGroup>
                        </FormControl>
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
