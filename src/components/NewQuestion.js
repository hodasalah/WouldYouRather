import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

const styles = (theme) => ({
    root: {
        "& > *": {
            display: "block",
            margin: "20px auto",
        },
    },
});
export class NewQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
    };
    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => console.log(this.state)
        );
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, authedUser } = this.props;
        const { optionOne, optionTwo } = this.state;
        const newQuestion = {
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser,
        };
        dispatch(handleAddQuestion(newQuestion));
    };

    render() {
        let disabled = true;
        const { optionOne, optionTwo } = this.state;
        if (optionOne !== "" && optionTwo !== "") {
            disabled = false;
        }
        const classes = this.props;
        return (
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={this.handleSubmit}
            >
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="component-outlined-1">
                        First Option
                    </InputLabel>
                    <OutlinedInput
                        name="optionOne"
                        id="component-outlined-1"
                        value={this.state.optionOne}
                        onChange={this.handleChange}
                        label="Name"
                    />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="component-outlined-2">
                        Second Option
                    </InputLabel>
                    <OutlinedInput
                        name="optionTwo"
                        id="component-outlined-2"
                        value={this.state.optionTwo}
                        onChange={this.handleChange}
                        label="Name"
                        fullWidth
                    />
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={disabled}
                >
                    Submit
                </Button>
                {/* <button
                    type="submit"
                    className="primary-btn"
                    disabled={disabled}
                >
                    Submit
                </button> */}
            </form>
        );
    }
}
const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser,
    };
};
export default connect(mapStateToProps)(
    withStyles(styles, { theme: true })(NewQuestion)
);
